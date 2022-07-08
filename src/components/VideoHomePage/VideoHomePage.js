import React, { Component } from "react";

// import "./App.css";
import "../../App.css";
// import VideoComponent from "../components/VideoComponent/VideoComponent";
import VideoComponent from "../VideoComponent/VideoComponent";
import InfoComponent from "../InfoComponent/InfoComponent";
import CommentComponent from "../CommentComponent/CommentComponent";
import CommentComponentCard from "../CommentComponentCard/CommentComponentCard";
import VideoSectionComponent from "../NextVideos/VideoSectionComponent";
import Upload from "../Upload/Upload";
import videoDataDetails from "../../data/video-details.json";
import videoData from "../../data/videos.json";
import "../../styles/partials/_global.scss";
import axios from "axios";

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
let apiKey = "7648cc0e-5070-4efb-8230-5a5e50639493";
let url = "https://project-2-api.herokuapp.com/";

class VideoHomePage extends Component {
  state = {
    videosData: [],
    selectedVid: [],
  };

  fetchVideoDetails = (videoId) => {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=7648cc0e-5070-4efb-8230-5a5e50639493`
      )
      .then((response) => {
        console.log(response.data);
        this.setState({
          selectedVid: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount = () => {
    axios
      .get(
        "https://project-2-api.herokuapp.com/videos?api_key=7648cc0e-5070-4efb-8230-5a5e50639493"
      )
      .then((response) => {
        console.log(response.data);
        this.setState({
          videosData: response.data,
        });
        console.log(response.data[0].id);
        return response.data[0].id;
      })
      .then((firstVideoID) => {
        // console.log(firstVideoID);
        this.fetchVideoDetails(firstVideoID); // Setting the first movie
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleVideoSelect = (title) => {
    this.setState({
      selectedVideo: videoDataDetails.find((video) => video.title === title),
    });
  };

  componentDidUpdate = (prevProbs) => {
    console.log(this.props.match.params.id);
    const newVideoID = this.props.match.params.id;
    if (prevProbs.match.params.id !== newVideoID) {
      const videoToLoadId =
        newVideoID !== undefined ? newVideoID : this.state.videosData[0].id;
      this.fetchVideoDetails(videoToLoadId);
    }
  };

  render() {
    // const videoFilter = videoData.filter((video) => {
    //   return video.title !== this.state.selectedVideo.title;
    //   // Getting all the videos which are not the one which is selected
    // });

    const videoFilterDynamic = this.state.videosData.filter((video) => {
      return video.title !== this.state.selectedVid.title;
    }); // Change to id
    const commentFilter = videoDataDetails.filter(
      (video) => video.title === this.state.selectedVid.title
    );
    return (
      <>
        <VideoComponent selectedVideo={this.state.selectedVid} />
        <div className="testing">
          <div className="testing-div">
            <InfoComponent selectedVideo={this.state.selectedVid} />
            <CommentComponent />

            <CommentComponentCard
              selectedVideo={this.state.selectedVid}
              video={commentFilter}
            />
          </div>

          <div className="desktop-VideoSectionComponent">
            <VideoSectionComponent
              video={videoFilterDynamic}
              onVideoSelect={this.handleVideoSelect}
            />
          </div>
        </div>
        <div className="desktop-hide ">
          <VideoSectionComponent
            video={videoFilterDynamic} //Change this to videoFilterDynamic right now it doesnt work desktop?
            onVideoSelect={this.handleVideoSelect}
          />
        </div>
      </>
    );
  }
}

export default VideoHomePage;
