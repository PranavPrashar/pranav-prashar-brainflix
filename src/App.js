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
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from "axios";

let apiKey = "7648cc0e-5070-4efb-8230-5a5e50639493";
let url = "https://project-2-api.herokuapp.com/";
//https://project-2-api.herokuapp.com/videos?api_key=7648cc0e-5070-4efb-8230-5a5e50639493

class App extends Component {
  state = {
    // video: videoData,
    videosData: [],
    selectedVideo: null,
    // selectedVideo: videoDataDetails[0],
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
    const commentFilter = videoDataDetails.filter(
      (video) => video.title === this.state.selectedVideo.title
    );

    return (
      <>
        <BrowserRouter>
          <Route path="/" exact>
            <Navbar />
            <VideoComponent selectedVideo={this.state.selectedVideo} />
            <div className="testing">
              <div className="testing-div">
                <InfoComponent selectedVideo={this.state.selectedVideo} />
                <CommentComponent />

                <CommentComponentCard
                  selectedVideo={this.state.selectedVideo}
                  video={commentFilter}
                />
              </div>

              <div className="desktop-VideoSectionComponent">
                <VideoSectionComponent
                  video={videoFilter}
                  onVideoSelect={this.handleVideoSelect}
                />
              </div>
            </div>
            <div className="desktop-hide ">
              <VideoSectionComponent
                video={videoFilter}
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
