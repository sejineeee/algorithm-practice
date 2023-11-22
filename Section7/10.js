// 이분검색
// 임의의 N개의 숫자가 주어짐
// N개의 수를 오름차순으로 정렬
// N개의 수 중 한 개의 수 M이 주어짐
// M이 정렬된 상태에서 몇 번째에 있는지 구해야 됨
// 중복값은 존재하지 않음

function binarySearch(arr, m) {
  const sortedList = arr.sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;
  
  while(left <= right) {
    let mid = Math.floor((left + right) / 2);

    if(m === arr[mid]) {
      return mid;
    }

    if(m < arr[mid]) {
      right = mid - 1;
    } else if(m > arr[mid]) {
      left = mid + 1;
    }
  }

  return -1;
}

const list = [23, 87, 65, 12, 57, 32, 99, 81];
const M = 32;

console.log(binarySearch(list, M));