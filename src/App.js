import React from "react";
import Grid from "./components/Grid";
import StatusDiv from "./components/StatusDiv";
import Header from "./components/Header";
import Scrollable from "./components/Scrollable";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faSlidersH,
  faBraille,
  faCircleNotch,
  faLongArrowAltDown,
  faMusic,
  faCloud,
  faImage,
  faFile,
  faVideo,
  faPlay,
  faReceipt,
  faCloudMeatball
} from "@fortawesome/free-solid-svg-icons";
import "./App.scss";

library.add(
  faSearch,
  faSlidersH,
  faBraille,
  faCircleNotch,
  faLongArrowAltDown,
  faMusic,
  faCloud,
  faImage,
  faFile,
  faVideo,
  faPlay,
  faReceipt,
  faCloudMeatball
);

function App() {
  return (
    <div className="App">
      <Scrollable/>
      <div className="App-body">
        <Header />
        <StatusDiv />
        <Grid />
      </div>
      
    </div>
  );
}

export default App;
