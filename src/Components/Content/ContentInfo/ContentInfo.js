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
          style={{ width: 200, height: 200 }}
          src={props.profile.photos.large || userPhoto}
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
