import React from 'react';
import classes from './ContentInfo.module.css'

export default function ContentInfo() {
  return (
    <div>
       <div>
       <img
        src="http://farm2.staticflickr.com/1949/45717354341_a8dc471d63_b.jpg"
        alt=""
      />
       </div>
    
      <div className={classes.descriptionBlock}>
      ava + description
      </div>

    </div>
  )
}
