import React from "react";
import GridImage from "./GridImage";
import "./Grid.scss";

const Grid = props => {
  return (
    <div className="Componenent-Grid">
      <div>
        <GridImage isActive={true} iconName="long-arrow-alt-down" menuName="downloads" />
        <GridImage isActive={false} iconName="image" menuName="images" />
        <GridImage isActive={false} iconName="music" menuName="music" />
        <GridImage isActive={false} iconName="cloud" menuName="cloud" />
        <GridImage isActive={true} iconName="file" menuName="documents" />
        <GridImage isActive={false} iconName="video" menuName="movies" />
        <GridImage isActive={false} iconName="cloud-meatball" menuName="cloud" />
        <GridImage isActive={false} iconName="receipt" menuName="documents" />
        <GridImage isActive={false} iconName="play" menuName="movies" />
      </div>
    </div>
  );
};

export default Grid;
