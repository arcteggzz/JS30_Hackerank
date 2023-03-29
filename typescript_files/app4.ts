const staircase = (n: number) => {
  for (let i = 1; i <= n; i++) {
    const iterationArray = genArray(n - i, i);
    typeOut(iterationArray.join(""));
  }
};

const genArray = (empty: number, hash: number) => {
  const finalArray: string[] = [];
  for (let i = 0; i < empty; i++) {
    finalArray.push(" ");
  }
  for (let i = 0; i < hash; i++) {
    finalArray.push("#");
  }
  return finalArray;
};

const typeOut = (text: string) => {
  console.log(text);
};

const test1 = 6;
const test2 = 9;

staircase(test1);
staircase(test2);
