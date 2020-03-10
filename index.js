const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i]["result"] === "W") {
      return array[i]["year"]
    }
  }
}