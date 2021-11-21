import React from "react";

import "./Backdrop.scss";

const backdrop = (props) => {
  const cssClasses = [
    "Backdrop",
    props.show ? "BackdropOpen" : "BackdropClosed",
  ];
  return <div className={cssClasses.join(" ")}></div>;
};

export default backdrop;
