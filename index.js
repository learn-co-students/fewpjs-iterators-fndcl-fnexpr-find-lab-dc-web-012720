const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let year;
  array.forEach( object => {
    if (object["result"] === "W") {
      year = object["year"]
    }    
  })
  return year;
}
