function getDivisorsCnt(n) {
  if (n === 1) {
    return 1;
  }

  let result = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      // If i is a divisor of n, increment the count
      result++;

      // If i and n/i are different, increment the count again
      if (i !== n / i) {
        result++;
      }
    }
  }
  return result;
}


// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.
