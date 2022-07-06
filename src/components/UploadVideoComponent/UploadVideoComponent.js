import React from "react";
import "./UploadVideoComponent.scss";
import publishIcon from "../../assets/icons/publish.svg";
import uploadImage from "../../assets/images/Upload-video-preview.jpg";

function UploadVideoComponent() {
  return (
    <div className="uploadvideocomponent">
      <div className="uploadvideocomponent__header">
        <h2 className="uploadvideocomponent__header--large">Upload Video</h2>
      </div>
      <div>
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
      </div>

      <div className="uploadvideocomponent__buttons">
        <span className="uploadvideocomponent__buttons--publish">
          <img
            src={publishIcon}
            alt="comment icon"
            className="conversation__right--commentbutton--image"
          ></img>
          <p className="conversation__right--commentbutton--text">Publish</p>
        </span>
        <span className="uploadvideocomponent__buttons--cancel">Cancel</span>
      </div>
    </div>
  );
}

export default UploadVideoComponent;
