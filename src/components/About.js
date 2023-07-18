import React from "react";
import Links from "./Link";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>

      {props.bio ?  <p>{props.bio}</p> : ""}
     
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={"https://github.com/liza"} />
    </div>
  );
}

export default About;
