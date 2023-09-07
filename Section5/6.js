// 학급 회장(해쉬)
// 학급 회장 후보 기호 A, B, C, D, E 등록
// 어떤 기호가 학급 회장이 되었는지 출력하는 프로그램
// 첫 줄에는 반 학생수가 주어지고, 두번째 줄에는 선생님이 발표한 순서 문자열
// 반드시 한 명의 학급회장이 선출되도록 투표결과가 나왔다고 가정함

function getVotingResult(N, s) {
  let obj = {};
  let num = null;
  let result = null;
  let convertStr = s.toUpperCase();

  for (let i = 0; i < N; i++) {
    if (obj[convertStr[i]]) {
      obj[convertStr[i]]++;
    } else {
      obj[convertStr[i]] = 1;
    }
  }

  for (const candidate in obj) {
    if (num < obj[candidate]) {
      num = obj[candidate];
      result = candidate;
    }
  }

  return result;
}

let str = "BACBACCACCBDEDE";

console.log(getVotingResult(15, str));

module.exports = getVotingResult;
