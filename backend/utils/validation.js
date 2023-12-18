function isValidEmail(email) {
  return email && email.includes("@");
}

function isValidNumber(number) {
  const phoneNumberRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[0-9]*$/;
  return number && phoneNumberRegex.test(number);
}

function isValidImageUrl(value) {
  return value && value.startsWith("http");
}
