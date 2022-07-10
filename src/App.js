import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Upload from "./components/Upload/Upload";
import { Component } from "react";
import videoDataDetails from "./data/video-details.json";
import "./styles/partials/_global.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import VideoHomePage from "./components/VideoHomePage/VideoHomePage";

// let apiKey = "7648cc0e-5070-4efb-8230-5a5e50639493";
// let url = "https://project-2-api.herokuapp.com/";
//https://project-2-api.herokuapp.com/videos?api_key=7648cc0e-5070-4efb-8230-5a5e50639493

class App extends Component {
  state = {
    // video: videoData,
    videosData: [],
    selectedVideo: videoDataDetails[0], // Sprint 1
    selectedVid: [],
  };
  render() {
    document.title = "Brainflix Website";
    return (
      <>
        <BrowserRouter>
          <Navbar />
          {/* <VideoComponent selectedVideo={this.state.selectedVideo} /> */}
          <Switch>
            <Route path="/" exact component={VideoHomePage} />
            <Route path="/video/:id" component={VideoHomePage} />
            <Route path="/upload" exact component={Upload} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
