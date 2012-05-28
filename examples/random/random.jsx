#include "../../basil.js";

function draw() {
  var count = 23;

  b.println( b.width+" x "+b.height);

  for (var i = 0; i < 23; i++) {
    var x = b.random(0, b.width);
    var y = b.random(0, b.height);
    var size = b.random(10, 123);
    b.ellipse(x, y, size, size);
  }
}