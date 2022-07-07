import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import VideoComponent from "./components/VideoComponent/VideoComponent";
import InfoComponent from "./components/InfoComponent/InfoComponent";
import CommentComponent from "./components/CommentComponent/CommentComponent";
import CommentComponentCard from "./components/CommentComponentCard/CommentComponentCard";
import VideoSectionComponent from "./components/NextVideos/VideoSectionComponent";
import Upload from "./components/Upload/Upload";
import { Component } from "react";
import videoData from "./data/videos.json";
import videoDataDetails from "./data/video-details.json";
import "./styles/partials/_global.scss";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import axios from "axios";

let apiKey = "7648cc0e-5070-4efb-8230-5a5e50639493";
let url = "https://project-2-api.herokuapp.com/";
//https://project-2-api.herokuapp.com/videos?api_key=7648cc0e-5070-4efb-8230-5a5e50639493

class App extends Component {
  state = {
    // video: videoData,
    videosData: [],
    selectedVideo: videoDataDetails[0],
    selectedVid: [],
  };
  //https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=7648cc0e-5070-4efb-8230-5a5e50639493
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
          videoData: response.data,
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
  render() {
    const videoFilter = videoData.filter((video) => {
      return video.title !== this.state.selectedVideo.title;
      // Getting all the videos which are not the one which is selected
    });

    const videoFilterDynamic = this.state.videosData.filter((video) => {
      return video.title !== this.state.selectedVid.title;
    });
    const commentFilter = videoDataDetails.filter(
      (video) => video.title === this.state.selectedVideo.title
    );

    return (
      <>
        <BrowserRouter>
          <Route path="/" exact>
            <Navbar />
            {/* <VideoComponent selectedVideo={this.state.selectedVideo} /> */}
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
                video={videoFilter} //Change this to videoFilterDynamic right now it doesnt work desktop?
                onVideoSelect={this.handleVideoSelect}
              />
            </div>
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
