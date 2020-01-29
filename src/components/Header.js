import React from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchIcon = <FontAwesomeIcon icon="search" size="xs"/>;
const SlidersIcon = <FontAwesomeIcon icon="sliders-h" size="xs" />;
const BrailleIcon = <FontAwesomeIcon icon="braille" size="xs" />;
const Header = props => {
  return (
    <div className="Component-Header">
      <div>{SearchIcon}</div>
      <div>{SlidersIcon}</div>
      <div>{BrailleIcon}</div>
    </div>
  );
};

export default Header;
