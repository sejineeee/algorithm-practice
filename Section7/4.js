// 삽입 정렬
// N개의 숫자가 입력되면 오름차순으로 정렬
// 삽입 정렬 방법 이용

function insertionSort(arr) {
  const list = [...arr];


  for(let i = 0; i < list.length; i++) {
    for(let j = 0; j < i; j++) {
      if(list[i] < list[j]) {
        [list[i], list[j]] = [list[j], list[i]]
      }
    }
  }

  return list;
}

const list = [11, 7, 5, 6, 10, 9];

console.log(insertionSort(list));
