import React from "react";
import classes from './Content.module.css'
import MyPosts from '../Content/MyPosts/MyPosts'

export default function Content() {
  return (
    <div className={classes.Content}>
      <div>
      <img
        src="http://farm2.staticflickr.com/1949/45717354341_a8dc471d63_b.jpg"
        alt=""
      />
      </div>
     

      <div>ava + description</div>
        <MyPosts />
    </div>
  );
}
