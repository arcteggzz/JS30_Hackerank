function encryption(s: string) {
  //for empty string case or one length string
  if (s.length < 2) return s;

  //calculate the rows and columns needed
  const [rows, columns] = getTable(s);

  // empty string to hold the encryted string
  let encryptStr: string = "";

  // create a loop to read each column of string from top to bottom.
  //the trick here is to use multiples of the index(findex) of the current loop
  for (let fIndex = 0; fIndex < columns; fIndex++) {
    //get the strings of each column using the "getStrBlock() function"
    const strBlock = getStrBlock(rows, columns, fIndex, s);
    encryptStr += strBlock;
  }

  //remove the empty character added to the back of the final block of string
  return encryptStr.slice(0, -1);
}

function getTable(s: string) {
  const root: number = Math.sqrt(s.length);
  let rows: number = Number.isInteger(root) ? root : Math.trunc(root);
  let columns: number = Number.isInteger(root) ? root : Math.trunc(root) + 1;
  //the check below prevents the area of the table from being less than the length of the string passed in
  if (rows * columns < s.length) {
    rows += 1;
  }
  return [rows, columns];
}

function getStrBlock(rows: number, columns: number, fIndex: number, s: string) {
  let strBlock = "";
  //loop through to create a string block of column characters
  let i = 0;
  while (i < rows) {
    //function to get the correct index
    //we add findex because this helps us target the current column we are looping through
    let index = indexCalculator(i, columns) + fIndex;
    //function to return the correct letter based on index
    //if we reach the part of the column that doesn't hold a character, return
    if (s[index] === undefined) {
      return strBlock + " ";
    } else {
      strBlock += s[index];
      i++;
    }
  }
  return strBlock + " ";
}

function indexCalculator(i: number, columns: number) {
  return i * columns;
}

// encryption("haveaniceday")
// encryption("chillout")

// console.log(encryption(""))
// console.log(encryption("a"))
// console.log(encryption("ab"))
// console.log(encryption("abc"))
// console.log(encryption("abcd"))
// console.log(encryption("abcde"))
// console.log(encryption("abcdef"))
// console.log(encryption("abcdefg"))

console.log(encryption("haveaniceday"));
console.log(encryption("chillout"));
console.log(encryption("feedthedog"));
