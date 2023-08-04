// https://www.codewars.com/kata/52685f7382004e774f0001f7/solutions/javascript

// 1 час = 3600 секунд

type unitTime = string | number

function humanReadable(seconds: number): string {
  if (!seconds) return "00:00:00"

  let hh: unitTime = Math.floor(seconds / 3600)
  if (hh < 10) hh = `0${hh}`

  let mm: unitTime = Math.floor((seconds % 3600) / 60)
  if (mm < 10) mm = `0${mm}`

  let ss: unitTime = Math.floor(seconds % 60)
  if (ss < 10) ss = `0${ss}`

  return `${hh}:${mm}:${ss}`
}

console.log(humanReadable(0))

/*
* function humanReadable(seconds) {
var hours = parseInt( seconds / 3600 ) ;
var minutes = parseInt( seconds / 60 ) % 60;
var seconds = seconds % 60;

var pad = function(val){
  return val < 10 ?"0"+val:val;
}

return pad(hours) + ":" +pad(minutes) + ":" + pad(seconds);
}
* */
