function printerError(s) {
  const goodReg = /[a-m]/;
  let errCount = 0;
  const stringArr = s.split('');
  const lengthOfArr = stringArr.length;
  for (let i = 0; i < lengthOfArr; i++) {
    if (!goodReg.test(stringArr[i])) {
      errCount++;
    }
  }
  return `${errCount}/${lengthOfArr}`;
}
