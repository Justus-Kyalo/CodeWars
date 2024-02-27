// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {  
  // The function code should be here
 let result = {};
  
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (result[char] === undefined) {
      result[char] = 1;
    } else {
      result[char]++;
    }
  }
  
  return result;
  
   }

