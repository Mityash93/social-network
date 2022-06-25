import React from "react";
import Preloader from "../../common/preloader/Preloader";
import classes from "./ContentInfo.module.css";

export default function ContentInfo(props) {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img
          src="http://farm2.staticflickr.com/1949/45717354341_a8dc471d63_b.jpg"
          alt=""
        />
      </div>

      <div className={classes.descriptionBlock}>
        <img src={props.profile.photos.large} alt="" />
        ava + description
      </div>
    </div>
  );
}
