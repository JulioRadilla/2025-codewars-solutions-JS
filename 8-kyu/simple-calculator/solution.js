//First Solution:
let calculator = (a, b, sign) =>
    typeof a == 'number' && 
    typeof b == 'number' && 
    ['+', '-', '/', '*'].includes(sign) 
      ? sign == '+' 
        ? a + b 
        : sign == '-' 
        ? a - b 
        : sign == '/' 
        ? a / b 
        : a * b 
      : 'unknown value';
//Second Solution:
let calculator2 = (a, b, sign) => {
    if (typeof a !== 'number' || typeof b !== 'number' || !['+', '-', '/', '*'].includes(sign)) {
      return 'unknown value';
    }
    switch (sign) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      case '/': return a / b;
      default: return 'unknown value'; // redundant but safe
    }
  };
//Third Solution: 
function calculator3(a, b, sign) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return 'unknown value';
    }
    
    if (sign === '+') {
      return a + b;
    } else if (sign === '-') {
      return a - b;
    } else if (sign === '*') {
      return a * b;
    } else if (sign === '/') {
      return a / b;
    } else {
      return 'unknown value';
    }
  }