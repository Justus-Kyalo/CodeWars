function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let result = numbers[i] + numbers[j];
      if (result === target) {
        return [i, j];
      }
    }
  }
}

