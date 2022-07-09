import React from "react";
import Preloader from "../../common/preloader/Preloader";
import classes from "./ContentInfo.module.css";
import HookContentStatus from "./HookContentStatus";
import userPhoto from "../../../assets/images/user.jpeg";

export default function ContentInfo({ savePhoto, isOwner, ...props }) {
  if (!props.profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (event) => {
    if (event.target.files.length) {
      savePhoto(event.target.files[0]);
    }
  };

  return (
    <div>
      <div className={classes.descriptionBlock}>
        <img
          style={{ width: 250, height: 230 }}
          src="https://i.pinimg.com/originals/da/5c/ee/da5ceed103b15f1222a596044ad6d913.jpg"
          // src={props.profile.photos.large || userPhoto}
          alt=""
        />
        <div>
          {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        </div>
        <HookContentStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
}
