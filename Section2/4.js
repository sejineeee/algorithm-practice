// 점수 계산
// 연속적으로 답을 맞히는 경우에는 가산점
// 문제를 맞히면 1점
// 연속으로 맞히면 계속 + 1점씩 늘어난다
// 틀린 문제는 0점
// 총 점수를 계산하는 프로그램을 작성

function solution(score) {
  let answer = 0,
    contS = 0;
  for (let i = 0; i < score.length; i++) {
    if (score[i] === 1) {
      contS++;
      answer += contS;
    } else {
      contS = 0;
    }
  }
  return answer;
}

const score = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(score));
