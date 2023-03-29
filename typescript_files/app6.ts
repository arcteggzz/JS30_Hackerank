function countingValleys(steps: number, path: string) {
  let level = 0;
  let count = 0;
  for (let i = 0; i < steps; i++) {
    if (path[i] === "U") {
      level++;
    } else {
      level--;
    }
    if (level === 0 && path[i] === "U") {
      count++;
    }
  }
  return count;
}

console.log(countingValleys(8, "UDDDUDUU"));
console.log(countingValleys(12, "DDUUDDUDUUUD"));
