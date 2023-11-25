// 뮤직비디오(결정 알고리즘)
// DVD에는 총 N개의 곡이 들어감. 라이브 순서가 유지되어야 함.
// 1번 노래와 5번 노래를 같은 DVD에 녹화하기 위해서 사이의 모든 노래도 녹화해야 됨.
// 한 노래를 쪼개서 두 개의 DVD에 녹화하면 안됨.
// M개의 DVD에 모든 동영상을 녹화하기로 함.
// 이때 DVD의 크기(녹화 가능한 길이)를 최소로 하려고 함.
// M개의 DVD는 모두 같은 크기여야 함.

function binarySearch(arr, m) {
  let startTime = Math.max(...arr);
  let endTime = arr.reduce((previousValue, currentValue) => previousValue + currentValue);
  
  while(startTime <= endTime) {
    let mid = Math.floor((startTime + endTime) / 2);
    let sum = 0;
    let count = 1;
    
    for(let i = 0; i < arr.length; i++) { 
      if(sum + arr[i] > mid) {
        count += 1;
        sum = 0;
      }
  
      sum += arr[i];  
    }

    if(count <= m) {
      endTime = mid - 1;
    } else {
      startTime = mid + 1;
    }
  }
  
  return startTime;
}

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const M = 3;

console.log(binarySearch(list, M));
