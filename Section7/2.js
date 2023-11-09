// 버블 정렬
// N개의 숫자가 입력되면 오름차순으로 정렬하여 출력
// 정렬 방법은 버블 정렬로 하기

function bubbleSort(n, arr) {
  let list = arr;

  let count = 0;
  while (count < n) {
    for (let i = 0; i < n; i++) {
      if (list[i] > list[i + 1]) {
        [list[i + 1], list[i]] = [list[i], list[i + 1]];
      }
    }
    count++;
  }
  return list;
}

const list = [13, 5, 11, 7, 23, 15];

console.log(bubbleSort(6, list));
