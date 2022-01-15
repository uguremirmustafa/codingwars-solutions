function duplicateEncode(word) {
  const arrayedWord = word.toLowerCase().split('');
  const emptyArray = [];
  for (let i = 0; i < arrayedWord.length; i++) {
    let count = 0;
    for (let j = 0; j < arrayedWord.length; j++) {
      if (arrayedWord[i] === arrayedWord[j]) {
        count++;
      }
    }
    if (count === 1) {
      emptyArray.push('(');
    } else {
      emptyArray.push(')');
    }
    count = 0;
  }
  const result = emptyArray.join('');
  console.log(result);
  return result;
}

duplicateEncode('(())())');

// hold current char
// initiate a count = 0
// loop over the list and increase the count++
// if count
