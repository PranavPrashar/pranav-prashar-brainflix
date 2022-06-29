import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import VideoComponent from "./components/VideoComponent/VideoComponent";
import InfoComponent from "./components/InfoComponent/InfoComponent";
import CommentComponent from "./components/CommentComponent/CommentComponent";
import CommentComponentCard from "./components/CommentComponentCard/CommentComponentCard";
import NextVideos from "./components/NextVideos/NextVideos";
import { Component } from "react";
class App extends Component {

  state ={
    video: 
  }
  render() {
    return (
      <>
        <Navbar />
        <VideoComponent />
        <InfoComponent />
        <CommentComponent />
        <CommentComponentCard />
        <NextVideos />
      </>
    );
  }
}

export default App;
