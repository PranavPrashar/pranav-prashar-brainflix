import React, { Component } from "react";
import "./UploadVideoComponent.scss";
import publishIcon from "../../assets/icons/publish.svg";
import uploadImage from "../../assets/images/Upload-video-preview.jpg";
import { NavLink } from "react-router-dom";

function confirmPublish() {
  alert("Video Published");
}

class UploadVideoComponent extends Component {
  state = {
    // publishButtonState: false,
    videoStatus: "",
  };

  handlePublishClick = (event) => {
    window.confirm("Video Has been published");
    // setTimeout(() => {
    //   // event.preventDefault();
    //   this.setState({ videoStatus: "Video Has been updated" });
    // }, 2000);

    // this.setState({videoStatus:"Video Has been updated"})
  };
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
                className="uploadvideocomponent__form--textarea"
                name="videodescription"
                placeholder="Add a description to your video"
                rows={6}
                // cols={4}
              ></textarea>
            </form>
            <p className="confirmPublish">{this.state.videoStatus}</p>
          </div>
        </div>

        {/* <div>
        <p className="uploadvideocomponent__header--little">video thumbnail</p>
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
          ></textarea>

          <label
            className="uploadvideocomponent__form--label"
            htmlFor="videodescription"
          >
            Add a video description
          </label>

          <textarea
            id="videodescription"
            className="uploadvideocomponent__form--textarea"
            name="videodescription"
            placeholder="Add a description to your video"
            rows={6}
            // cols={4}
          ></textarea>
        </form>
      </div> */}

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
          <span className="uploadvideocomponent__buttons--cancel">Cancel</span>
        </div>
      </div>
    );
  }
}

export default UploadVideoComponent;
