function findLongestWord(str) {
  str = str + " ";
  let currentWord = "";
  let currentLongestWord = "";
  let i = 0;
  while (i < str.length) {
    if (str[i] === " ") {
      if (currentWord.length > currentLongestWord.length) {
        currentLongestWord = currentWord;
        currentWord = "";
      } else {
        currentWord = "";
      }
    } else {
      if (isLetter(str[i])) currentWord = currentWord + str[i];
    }
    i++;
  }

  return currentLongestWord;
}

function isLetter(char) {
  return (char >= "A" && char <= "Z") || (char >= "a" && char <= "z");
}

// console.log(findLongestWord("smart peepss Oghenetega"))
console.log(
  findLongestWord(
    "Smart people learn from everything and everyone, average people from their experiencesss%%%*&, stupid people already, have all the answers"
  )
);
