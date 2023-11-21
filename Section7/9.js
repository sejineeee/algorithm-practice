// 결혼식
// 결혼식 피로연 장소를 빌려 3일간 쉬지 않고 함
// 참석하는 친구들 N명의 시간정보
// 최대 인원수를 구하여 수용할 수 있는 장소를 빌리려고 함
// 오는 시간 13, 가는 시간 15라면 피로연 장소에 13시에는 존재O. 15시 정각에는 존재X

function findMaxPersonnel(arr) {
  const timeList = [];

  for(const [arriveTime, leaveTime] of arr) {
    timeList.push([arriveTime, 'arrive']);
    timeList.push([leaveTime, 'leave']);
  }

  const sortedTimeList = timeList.sort((a, b) => {
    if(a[0] === b[0]) {
      return a[1] === 'leave' ? -1 : 1;
    }
    return a[0] - b[0]
  });
  
  let count = 0;
  let maxCount = 0;

  sortedTimeList.forEach((time) => {
    if(time[1] === 'arrive') {
      count += 1;
      maxCount = Math.max(maxCount, count);
    } else if(time[1] === 'leave') {
      count -= 1;
    }
  });

  return maxCount;
}

const list = [[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];

console.log(findMaxPersonnel(list));
