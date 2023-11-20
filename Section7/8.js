// 회의실 배정
// 한 개의 회의실이 있는데 사용하고자 하는 n개의 회의들에 대해
// 회의실 사용표를 만들려고 함
// 각 회의 시작시간과 끝나는 시간이 주어져 있고 각 회의가 겹치지 않게 하면서
// 회의실을 사용할 수 있는 최대수의 회의를 찾기
// 회의는 한번 시작하면 중간에 중단X, 끝나는 것과 동시에 다음 회의 시작 가능함

function findMaxConferenceRoom(list) {
  let max = 0;
  let result = [];
   
  for(let i = 0; i < list.length; i++) {
    const conferenceListCase = [list[i]];

    let endTime = list[i][1];

    for(let j = 0; j < list.length; j++) {
      if(i !== j && endTime === list[j][0]) {
        endTime = list[j][1];
        conferenceListCase.push(list[j]);
      }
    }

    if(conferenceListCase.length > max) {
      max = conferenceListCase.length;
      result = [...conferenceListCase];
    }
  }

  return result.length;
}

const conferenceList = [[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];

console.log(findMaxConferenceRoom(conferenceList));

module.exports = findMaxConferenceRoom;