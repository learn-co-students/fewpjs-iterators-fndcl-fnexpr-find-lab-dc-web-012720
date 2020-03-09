
function superbowlWin(sports) {
  let year = undefined

  let result = sports.find(function(e) {
      if(e.result === "W") {
        year = e.year
      }
  })

  return year
}

