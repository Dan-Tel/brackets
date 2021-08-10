module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = [];
  let OPEN_BRACKETS = [];
  let BRACKETS_PAIR = {};

  for (let i = 0; i < bracketsConfig.length; i++) {
    OPEN_BRACKETS.push(bracketsConfig[i][0]);
    BRACKETS_PAIR[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    let lastBracket = stack[stack.length - 1];
    
    if (OPEN_BRACKETS.includes(currentSymbol) && currentSymbol !== '') {
      stack.push(currentSymbol);
    } else {
      if (stack.length === 0) {
        return false;
      }

      if (BRACKETS_PAIR[currentSymbol] === lastBracket) {
        stack.pop();
      } else {
        return false;
      }
    }
  } 
  return stack.length === 0;
}
