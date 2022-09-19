// 가위바위보
// A, B가 가위바위보 게임을 한다.
// N번의 게임을 해서 A가 이기면 A 출력, B가 이기면 B 출력, 비기면 D 출력
// 1: 가위, 2: 바위, 3: 보
// 각 회를 누가 이겼는지 출력하는 프로그램

function solution(userA, userB) {
  let answer = [];
  for (let i = 0; i < userA.length; i++) {
    if (userA[i] === userB[i]) {
      answer.push("D");
    } else if (userA[i] === 1 && userB[i] === 3) {
      answer.push("A");
    } else if (userA[i] === 2 && userB[i] === 1) {
      answer.push("A");
    } else if (userA[i] === 3 && userB[i] === 2) {
      answer.push("A");
    } else {
      answer.push("B");
    }
  }
  return answer;
}

let userA = [2, 3, 3, 1, 3];
let userB = [1, 1, 2, 2, 3];
console.log(solution(userA, userB));
