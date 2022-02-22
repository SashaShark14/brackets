module.exports = function check(str, bracketsConfig) {
   
  const pairs = {
    '(': ')', 
    '[': ']', 
    '{': '}', 
    '|': '|', 
    '1': '2', 
    '3': '4', 
    '5': '6', 
    '7': '7', 
    '8': '8', 
  }

   let stack = []
   let flatArr = bracketsConfig.flat()
let openBrackets = []
for(let k = 0; k < flatArr.length; k++) {
    if(k % 2 === 0) {
        openBrackets.push(flatArr[k])        
    }    
}

const closing = Object.values(pairs);  
        
  for (let char of str) {
    if (pairs[char]) {
      stack.push(char);
    } else if (closing.includes(char) && char !==pairs[stack.pop()]) {
      return false;
    }
  }
  return !stack.length;

// for(let i = 0; i < str.length; i++) {
//      let currentSymbol = str[i]

//      if(openBrackets.includes(currentSymbol)) {
//             stack.push(currentSymbol)
//           } else {
//             if(stack.length === 0) {
//               return false
//             }
//             let lastElement = stack[stack.length - 1]
      
//             if(pairs[currentSymbol === lastElement]) {
//               stack.pop()
//             } else {
//               return false
//             }
//           }
//         }
//        return stack.length === 0
      

// }


}


