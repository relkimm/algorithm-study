import { swap } from "..";

function bubble_sort(array) {
  for (let i = array.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

console.log("버블 정렬", bubble_sort([9, 5, 3, 7, 1]));
