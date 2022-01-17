module.exports = function reverse(n) {
  numText = Math.abs(n).toString()
  result = ''
  for (let i = 1; i < numText.length+1; i++) {
    h = numText.length-i
    result = `${result}${numText[h]}`;
  }
  return result
};