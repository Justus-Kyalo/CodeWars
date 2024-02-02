
function getCount(str) {
  const vowels=['a','e','i','o','u']
  const strArr=str.split("");
  let count=0;
  for (let i=0;i<strArr.length;i++)
{
  if(vowels.indexOf(strArr[i])!==-1){
    count+=1
  }
  
}
  return count;
}
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// // The input string will only consist of lower case letters and/or spaces.
