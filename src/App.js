import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import VideoComponent from "./components/VideoComponent/VideoComponent";
import InfoComponent from "./components/InfoComponent/InfoComponent";
import CommentComponent from "./components/CommentComponent/CommentComponent";

function App() {
  return (
    <>
      <Navbar />
      <VideoComponent />
      <InfoComponent />
      <CommentComponent />
    </>
  );
}

export default App;
