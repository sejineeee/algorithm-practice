// 삽입 정렬
// N개의 숫자가 입력되면 오름차순으로 정렬
// 삽입 정렬 방법 이용

function insertionSort(arr) {
  const list = [...arr];

  for(let i = 0; i < list.length; i++) {
    let currentValue = list[i];

    for(let j = i - 1; j >= 0; j--) {
      if(currentValue < list[j]) {
        list[j + 1] = list[j]
        list[j] = currentValue
      } 
    }
  }

  return list;
}

const list = [11, 7, 5, 6, 10, 9];

console.log(insertionSort(list));
