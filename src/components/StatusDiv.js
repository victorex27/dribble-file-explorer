import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./StatusDiv.scss";

// const CircleNotchIcon = <FontAwesomeIcon icon="circle-notch" size="2x" rotation={270}  color="orange"/>;
const percentage = 85;

const StatusDiv = props => {
  return (
    <div className="Component-StatusDiv">
      <div className="wrapper">
        <div>
          <div>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                textSize: '20px',
                textColor: "black",
                trailColor: "#d6d6d6",
                backgroundColor: "#FDD22C",
                pathColor:"#FDD22C"
              })}
            />
          </div>
          <div className="status">
            <span>Internal</span>
            <span>Storage</span>
            <span> 24.2Gb / 28.5Gb</span>
          </div>
        </div>
        <div> Analyse </div>
      </div>
    </div>
  );
};

export default StatusDiv;
