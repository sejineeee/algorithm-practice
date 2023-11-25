// 마구간 정하기
// N개의 마구간이 수직선상에 있음
// xN의 좌표를 가지며, 중복 없음
// C마리의 말. 각 마구간에 한 마리의 말만 넣음
// 가장 가까운 두 말의 거리가 최대가 되게 배치해야 됨
// C마리, N개의 마구간에 배치했을 때 
// 가장 가까운 두 말의 거리가 최대가 되는 최대값 출력

function getMaxDistance(list, N) {
  const sortedList = list.sort((a, b) => a - b);
  let start = 1;
  let end = sortedList[sortedList.length - 1];
  let result;
  
  while(start <= end) {
    let count = 1;
    let temp = sortedList[0];
    let mid = Math.floor((start + end) / 2);

    for(let i = 1; i < sortedList.length; i++) {
      if(sortedList[i] - temp >= mid) {
        temp = sortedList[i];
        count += 1;
      }
    }
  
    if(count < N) {
      end = mid -1;
    } else {
      result = mid;
      start = mid + 1;
    }
  }

  return result;
}

const horseCoordinateList = [1, 2, 8, 4, 9];
const totalHorseNumber= 3;

console.log(getMaxDistance(horseCoordinateList, totalHorseNumber))