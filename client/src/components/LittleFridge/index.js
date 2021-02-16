import React from "react";
import "./style.css";

//pass in PROPS to our bigfridge variable
const LittleFridge = (props) => {
  return (
    <div>{props.qty}, {props.item} </div>

  );
};

export default LittleFridge;