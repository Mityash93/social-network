import React from "react";
import classes from "./Content.module.css";
import ContentInfo from "./ContentInfo/ContentInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export default function Content({ savePhoto, isOwner, ...props }) {
  return (
    <div className={classes.Content}>
      <ContentInfo
        isOwner={isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        savePhoto={savePhoto}
      />
      <MyPostsContainer store={props.store} />
    </div>
  );
}
