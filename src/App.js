import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import VideoComponent from "./components/VideoComponent/VideoComponent";
import InfoComponent from "./components/InfoComponent/InfoComponent";
import CommentComponent from "./components/CommentComponent/CommentComponent";
import CommentComponentCard from "./components/CommentComponentCard/CommentComponentCard";
import VideoSectionComponent from "./components/NextVideos/VideoSectionComponent";
import { Component } from "react";
import videoData from "./data/videos.json";
import videoDataDetails from "./data/video-details.json";
import "./styles/partials/_global.scss";
class App extends Component {
  state = {
    video: videoData,
    selectedVideo: videoDataDetails[0],
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
    console.log(commentFilter);
    // console.log(videoFilter);
    return (
      <>
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
      </>
    );
  }
}

export default App;
