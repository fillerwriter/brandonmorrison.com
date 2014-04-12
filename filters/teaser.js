module.exports = function(string) {
  var teaserPlacement = string.indexOf("<!-- teaser -->");
  if (teaserPlacement == -1) {
    return string;
  }

  return string.substring(0, teaserPlacement);
};
