import React, { Component } from "react";
import "./UploadVideoComponent.scss";
import publishIcon from "../../assets/icons/publish.svg";
import uploadImage from "../../assets/images/Upload-video-preview.jpg";
import axios from "axios";
import { NavLink } from "react-router-dom";

class UploadVideoComponent extends Component {
  state = {
    videoStatus: "",
    formData: [],
  };

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handlePublishClick = () => {
    if (
      this.state.videotitle === undefined ||
      this.state.videodescription === undefined
    ) {
      console.log("Error Has occured");
      this.setState({
        videoStatus: "Please enter valid Title and Description",
      });
    } else {
      window.confirm(`your video ${this.state.videotitle} has been published`);
      const postObject = {
        title: this.state.videotitle,
        channel: this.state.videodescription,
      };
      axios
        .post("http://localhost:8080/videos", postObject)
        .then((response) => {
          return response.data;
        });
    }
  };

  redirect() {
    this.props.history.push();
  }
  render() {
    return (
      <div className="uploadvideocomponent">
        <div className="uploadvideocomponent__header">
          <h2 className="uploadvideocomponent__header--large">Upload Video</h2>
        </div>

        <div className="uploadvideocomponent__wrapper">
          <div>
            <p className="uploadvideocomponent__header--little">
              video thumbnail
            </p>
            <div className="uploadvideocomponent__container">
              <img
                src={uploadImage}
                alt="Video"
                className="uploadvideocomponent__container--image"
              />
            </div>
          </div>

          <div className="uploadvideocomponent__form">
            <form>
              <label
                className="uploadvideocomponent__form--label"
                htmlFor="videotitle"
              >
                title your video
              </label>
              <textarea
                id="videotitle"
                className="uploadvideocomponent__form--textarea"
                name="videotitle"
                placeholder="Add a title to your video"
                rows={2}
                required
                onChange={this.handleInput}
              ></textarea>

              <label
                className="uploadvideocomponent__form--label"
                htmlFor="videodescription"
              >
                Add a video description
              </label>
              {/* <form> */}
              <textarea
                id="videodescription"
                className="uploadvideocomponent__form--textarea--description"
                name="videodescription"
                placeholder="Add a description to your video"
                rows={6}
                required
                onChange={this.handleInput}
                // cols={4}
              ></textarea>
            </form>
            <p className="confirmPublish">{this.state.videoStatus}</p>
          </div>
        </div>

        <div className="uploadvideocomponent__buttons">
          <span className="uploadvideocomponent__buttons--publish">
            <img
              src={publishIcon}
              alt="comment icon"
              className="conversation__right--commentbutton--image"
            ></img>
            <NavLink
              to=""
              className="conversation__right--commentbutton--text"
              onClick={this.handlePublishClick}
            >
              <p className="conversation__right--commentbutton--text">
                Publish
              </p>
            </NavLink>
          </span>
          <NavLink to="/" className="uploadvideocomponent__buttons--cancel">
            <span className="uploadvideocomponent__buttons--cancel">
              Cancel
            </span>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default UploadVideoComponent;
