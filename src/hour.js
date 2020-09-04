export default function showHour(props) {
  var dateFormat = require("dateformat");
  var now = new Date();
  return dateFormat(now, "h:MM:ss TT");
}
