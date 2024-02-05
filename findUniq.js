function findUniq(arr) {
  // do magic
  const uniqueArr=[...new Set(arr)]
  const subArr=arr.slice(0,4)
  const mode=subArr.filter(val=>val===uniqueArr[0])
  return mode.length===1 ? uniqueArr[0] : uniqueArr[1]

 
}


// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

