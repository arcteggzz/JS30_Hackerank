function plusMinus(arr: number[]) {
  let positiveNum: number = 0;
  let negativeNum: number = 0;
  let zeroNum: number = 0;
  arr.forEach((item: number) => {
    if (item === 0) zeroNum++;
    if (item > 0) positiveNum++;
    if (item < 0) negativeNum++;
  });
  typeOut((positiveNum / arr.length).toFixed(6));
  typeOut((negativeNum / arr.length).toFixed(6));
  typeOut((zeroNum / arr.length).toFixed(6));
}

const typeOut = (text: string) => {
  console.log(text);
};

plusMinus([1, 1, 0, -1, -1]);
