const formatSolution = (str, testToken) => {
  let i = 0;
  finalString = "";
  while (i < str.length) {
    if (!testToken.includes(str[i])) {
      finalString = finalString + str[i];
    }
    i++;
  }
  return finalString;
};

export default formatSolution;
