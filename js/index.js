//Bootstrap and jquery included via CodePen. Much js functionality is in minified Bootstrap.js and configured through data attributes.

$(document).ready(function() {
  //Set the made-by and social buttons to the same height, for vertical alignment purposes. 
  var Height = $('#social-links').height();
  $('#made-by').height(Height);
});