const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(objects) {
  // objects.find(function(o){
  //   for (let i = 0; i < objects.length; i++) {
  //     if (objects[i].result === "W") {
  //       return objects[i].year;
  //     }
  //   }
  // });
  let o = objects.find(function(obj) {
    if (obj.result === "W") {
      return obj.year;
    }
  });

  if (o) {
    return o.year;
  } else {
    return o;
  }
}