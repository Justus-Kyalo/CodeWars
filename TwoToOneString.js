// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  // your code
let newString =  s1.concat(s2);
  
  return [...new Set(newString)].sort().join("");
  
}

// const Test = require('@codewars/test-compat');

// describe("longest",function() {
// it("Basic tests",function() {
//     Test.assertEquals(longest("aretheyhere", "yestheyarehere"), "aehrsty")
//     Test.assertEquals(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
//     Test.assertEquals(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")
// })})
