function validatePIN(pin) {
  const reg = /^\b(\d{4}|\d{6})\b$/g;
  const res = reg.test(pin);
  console.log(res);
  return res;
}
