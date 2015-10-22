(function() {
  'use strict';

  var x = 10;

  // Bad Practice, JSHint should catch this
  document.write("We're doing a bad thing here. We shouldn't" +
                 " be using document.write.");
  console.log("Script loaded")  // Semicolon left off here.
}());
