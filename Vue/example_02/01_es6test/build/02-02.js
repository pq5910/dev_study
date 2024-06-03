"use strict";

var msg = "GLOBAL";
function outer() {
  var msg = "Outer";
  console.log(msg);
  if (true) {
    var _msg = "Block";
    console.log(_msg);
  }
}
outer();