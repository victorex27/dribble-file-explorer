import React from "react";
import propTypes from "prop-types";
import "./GridImage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const dotImage = <div className="dot"></div>;

const GridImage = ({ isActive, iconName, menuName }) => {
  return (
    <div className="GridImage">
      <span> {isActive ? dotImage : ""} </span>
      <span>
        <div className={!isActive ? "black" : "not-black"}>
          <FontAwesomeIcon icon={iconName} color="white" size="xs" />
        </div>
      </span>
      <span>{menuName}</span>
    </div>
  );
};

GridImage.propTypes = {
  isActive: propTypes.bool.isRequired,
  iconName: propTypes.string.isRequired,
  menuName: propTypes.string.isRequired
};

export default GridImage;
