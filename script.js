function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let left = 0;
    let right = 0;
    for (let j = i; j <= arr.length - 1; j++) {
      right = right + arr[j];
    }
    for (let k = 0; k <= i; k++) {
      left = left + arr[k];
    }
    if (right == left) {
      return i;
    }
  }
  return -1;
}
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));

function findEvenIndex(arr) {
  let left = 0;
  right = arr.reduce((a, b) => a + b, 0);
  for (let i = 0; left <= right; ++i) {
    right -= arr[i];
    if (left === right) {
      return i;
    }
    left += arr[i];
  }
  return -1;
}
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
