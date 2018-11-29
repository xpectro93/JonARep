const firstLetter =(str)=> {
  return str[0]
}
const reverseStr =(str)=> {
   return str.split("").reverse().join("")
}
const capFirstLetter = (str)=> {
  return str[0].toUpperCase()+str.slice(1)
}

module.exports = {
  firstLetter,
  reverseStr,
  capFirstLetter
}
