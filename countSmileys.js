function countSmileys(arr) {
  if (!arr.length) return 0;
  let count=0
  const eyes =[":",";"];
  const nose =["-","~"];
  const mouth =[")","D"];
  let threeComps=[]
  let twoComps=[]

  

 
  for (let i = 0; i < eyes.length; i++) {
    for (let j = 0; j < nose.length; j++) {
      for (let k = 0; k < mouth.length; k++) {
        threeComps.push(eyes[i] + nose[j] + mouth[k]);
        twoComps.push(eyes[i] + mouth[k]);
      }
    }
  }

const validSmilesArr=[...threeComps,...twoComps];
  
  

   [...new Set(validSmilesArr)].forEach(val => {
   arr.forEach(item=>{
     if(item===val)return count++
   })
  });
  
  return count;
  
 
}




// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

//return the total number of smiling faces in the array

