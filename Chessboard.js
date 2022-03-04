let n = prompt("input size of grid: ");
let arr = [];
let count = 1;

for (let index = 0; index < n; index++) {
  count = 1;
  while (count <= n) {
    if ((index + count) % 2 != 0) arr.push(" ");
    else arr.push("#");
    count++;
    // console.log(arr);
    if (count <= n) continue;
    console.log(arr.join(""));
    arr = [];
  }
}
