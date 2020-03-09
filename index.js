const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(arr_of_objects){
  for (let i = 0; i < arr_of_objects.length; i++) {
    if (arr_of_objects[i]["result"] === "W") {
      return arr_of_objects[i]["year"]
    }
  }
  return undefined
}