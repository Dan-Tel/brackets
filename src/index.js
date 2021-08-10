module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let OPEN_BRACKETS = [];
  let BRACKETS_PAIR = {
    '(' : '',
    '{' : '',
    '[' : '',
  };

  for (let i = 0; i < bracketsConfig.length; i++) {
    OPEN_BRACKETS.push(bracketsConfig[i][0]);
    BRACKETS_PAIR[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    let lastBracket = stack[stack.length - 1];

    if(str.length % 2 !== 0) {
      return false;
    }

    if (lastBracket === BRACKETS_PAIR[currentSymbol]) {
      stack.pop();
    } else if(OPEN_BRACKETS.includes(currentSymbol)) {
      stack.push(currentSymbol);
    }
  }

  return stack.length === 0;
}
