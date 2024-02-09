function rot13(text) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (/[A-Za-z]/.test(char)) {
            let charCode = text.charCodeAt(i);
            let shifted = charCode + 13;
            if ((char >= 'a' && shifted > 'z'.charCodeAt(0)) || (char <= 'Z' && shifted > 'Z'.charCodeAt(0))) {
                shifted -= 26;
            }
            result += String.fromCharCode(shifted);
        } else {
            result += char;
        }
    }
    return result;
}
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
