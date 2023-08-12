
function printerError(s) {
  // your code
  let newArray = [];
  
  for (let i = 0; i < s.length; i++) {
    if (/[a-m]/i.test(s[i])) {
      newArray.push(s[i]);
    }
  }
  
  return `${s.length - newArray.length}/${ s.length}`;
}
