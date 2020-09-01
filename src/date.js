import React from "react";

export default function showDate(props) {
  var dateFormat = require("dateformat");
  var now = new Date();
  return dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
}
