import React from "react";
import ReactDOM from "react-dom";
import ons from "onsenui";
import App from "./App";

ons.ready(function () {
 //select platform
 if (navigator.userAgent === "HENTAI_APP") {
  ons.platform.select("android");
 } else {
  ons.platform.select("ios");
 }
 // build app
 var mountNode = document.getElementById("app");
 ReactDOM.render(<App name="Jane" />, mountNode);
});
