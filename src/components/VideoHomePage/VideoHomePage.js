import React, { Component } from "react";
import "../../App.css";
import VideoComponent from "../VideoComponent/VideoComponent";
import InfoComponent from "../InfoComponent/InfoComponent";
import CommentComponent from "../CommentComponent/CommentComponent";
import CommentComponentCard from "../CommentComponentCard/CommentComponentCard";
import VideoSectionComponent from "../VideoSectionComponent/VideoSectionComponent";

import videoDataDetails from "../../data/video-details.json";

import "./VideoHomePage.scss";

import "../../styles/partials/_global.scss";
import axios from "axios";

class VideoHomePage extends Component {
  state = {
    videosData: [],
    selectedVid: null,
    selectedVidComments: [],
  };
  // Fetching video details using Axios, then setting state to selected video, selectinb video based on passed id
  fetchVideoDetails = (videoId) => {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=7648cc0e-5070-4efb-8230-5a5e50639493`
      )
      .then((response) => {
        console.log(response.data);
        this.setState({ selectedVid: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // fetchComments = (videoId) => {
  //   axios
  //     .get(
  //       `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=7648cc0e-5070-4efb-8230-5a5e50639493`
  //     )
  //     .then((response) => {
  //       // console.log(response.data);
  //       this.setState({
  //         selectedVidComments: response.data.comment,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  //Allows us to run something once the component has mounted and is rendered, here we are calling the api for data and then setting using setState for the videosData and setting to response.data
  componentDidMount = () => {
    axios
      .get(
        "https://project-2-api.herokuapp.com/videos?api_key=7648cc0e-5070-4efb-8230-5a5e50639493"
      )
      .then((response) => {
        this.setState({
          videosData: response.data,
        });
        return response.data[0].id;
      })
      .then((firstVideoID) => {
        console.log(firstVideoID);
        this.fetchVideoDetails(firstVideoID);
        // this.fetchComments(firstVideoID);
        // Setting the first movie
      })
      .catch((error) => {
        console.log(error);
        // Catching errors and printing to console
      });
  };
  // Used to handle the video selection, it sets the state of selectedVideo by searching video
  handleVideoSelect = (title) => {
    this.setState({
      selectedVideo: this.videosData.find((video) => video.title === title),
    });
  };

  componentDidUpdate = (prevProbs) => {
    // console.log(this.props.match.params.id);
    const newVideoID = this.props.match.params.id;
    if (prevProbs.match.params.id !== newVideoID) {
      const videoToLoadId =
        newVideoID !== undefined ? newVideoID : this.state.videosData[0].id;
      this.fetchVideoDetails(videoToLoadId);
    }
  };

  render = () => {
    console.log(this.state.videosData.length !== 0);
    console.log(this.state.videosData);
    console.log(this.state.selectedVid);

    const videoFilterDynamic =
      this.state.videosData.length !== 0
        ? this.state.videosData.filter((video) => {
            return video.title !== this.state.selectedVid?.title;
          })
        : []; // Change to id
    // const commentFilter = videoDataDetails.filter(
    //   (video) => video.title === this.state.selectedVid.title
    // );
    return (
      <>
        {this.state.selectedVid && (
          <>
            <VideoComponent selectedVideo={this.state.selectedVid} />
            <div className="testing">
              <div className="testing-div">
                <InfoComponent selectedVideo={this.state.selectedVid} />
                <CommentComponent />

                <CommentComponentCard
                  selectedVideo={this.state.selectedVid}
                  video={this.state.selectedVid}
                />
              </div>

              <div className="desktop-VideoSectionComponent">
                <VideoSectionComponent
                  video={videoFilterDynamic}
                  // onVideoSelect={this.handleVideoSelect}
                />
              </div>
            </div>
            <div className="desktop-hide ">
              <VideoSectionComponent
                video={videoFilterDynamic}
                onVideoSelect={this.handleVideoSelect}
              />
            </div>
          </>
        )}
      </>
    );
  };
}

export default VideoHomePage;

// This is being used to render the Video home page, this consists of all the dynamic components such as the Comment Cards, Video section which is for showing the videos, Info Component which shows the user the data such as views and likes about the video

// Filtering the videos using helper methods called commentFilter and videoFilterDynamic which filter based on the given criteria
