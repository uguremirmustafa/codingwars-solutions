function digPow(n, p) {
  const digits = [];
  function getRecursiveMod(number) {
    if (number > 9) {
      const leftover = number % 10;
      digits.unshift(leftover);
      return getRecursiveMod((number - leftover) / 10);
    }
    digits.unshift(number);
    return number;
  }
  getRecursiveMod(n);
  let totalOfDigitsPower = 0;
  for (let i = 0; i < digits.length; i++) {
    totalOfDigitsPower += Math.pow(digits[i], p + i);
  }
  console.log(totalOfDigitsPower / n);
  if (totalOfDigitsPower % n === 0) {
    return totalOfDigitsPower / n;
  } else {
    return -1;
  }
}
digPow(46288, 3); // 1
