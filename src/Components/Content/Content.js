import React from "react";
import classes from "./Content.module.css";
import ContentInfo from "./ContentInfo/ContentInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export default function Content(props) {
  return (
    <div className={classes.Content}>
      <ContentInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer store={props.store} />
    </div>
  );
}
