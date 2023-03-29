function stringEncoder(str) {
  const vowels = `aeiou`;
  let encryptedString = "";
  let i = 0;
  while (i < str.length) {
    const nextCharacter = nextLetter(str[i]);
    if (vowels.includes(nextCharacter))
      encryptedString = encryptedString + nextCharacter.toUpperCase();
    else encryptedString = encryptedString + nextCharacter;

    i++;
  }

  return encryptedString;
}

function nextLetter(s) {
  return s.replace(/([a-zA-Z])[^a-zA-Z]*$/, function (a) {
    var c = a.charCodeAt(0);
    switch (c) {
      case 90:
        return "A";
      case 122:
        return "a";
      default:
        return String.fromCharCode(++c);
    }
  });
}

console.log(stringEncoder("zdhn"));
// console.log(nextLetter("a"));
