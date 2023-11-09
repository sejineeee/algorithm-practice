// 선택 정렬
// N개의 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램
// 정렬하는 방법은 선택 정렬

function selectionSort(n, arr) {
  const list = arr;

  for (let i = 0; i < n; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (list[min] > list[j]) {
        min = j;
      }
      [list[i], list[min]] = [list[min], list[i]];
    }
  }
  return list;
}

const list = [13, 5, 11, 7, 23, 15];

console.log(selectionSort(6, list));
