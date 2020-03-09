
function superbowlWin(array){
  let ans = array.find( obj => obj.result === "W" )
  return !!ans ? ans.year : undefined
}