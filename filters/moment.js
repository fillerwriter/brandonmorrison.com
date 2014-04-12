var moment = require("moment");

module.exports = function(string) {
  var dateTime = moment(string, "ddd MMM DD YYYY HH:mm:ss");
  return dateTime.format('MMMM Do, YYYY');
};
