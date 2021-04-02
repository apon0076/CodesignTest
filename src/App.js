import React, {Fragment} from "react";
import TopNav from "./components/toNav.js";
import TopBanner from "./components/topBanner";
import TopCategories from "./components/topCategories";
import APIimage from './components/APIimage';

function App() {
  return (
    <Fragment>
        <TopNav/>
        <TopBanner/>
        <TopCategories/>
        <APIimage/>
    </Fragment>
  );
}

export default App;
