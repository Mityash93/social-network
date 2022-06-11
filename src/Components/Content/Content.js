import React from "react";
import classes from './Content.module.css'
import MyPosts from '../Content/MyPosts/MyPosts'
import ContentInfo from "./ContentInfo/ContentInfo";

export default function Content(props) {
  return (
    <div className={classes.Content}>
        <ContentInfo />
        <MyPosts Posts={props.Posts} />
    </div>
  );
}
