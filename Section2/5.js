// 등수 구하기
// N(1 <= N <= 100)명의 학생의 국어 등수
// 같은 점수가 입력될 경우 높은 등수로 동일 처리
// 예를 들어 가장 높은 점수가 3명 존재하면 1등 3명, 그 다음 학생은 4등

function solution(score) {
  let answer = [],
    rankNum;
  for (let i = 0; i < score.length; i++) {
    rankNum = 1;
    for (let j = 0; j < score.length; j++) {
      if (score[i] < score[j]) {
        rankNum++;
      }
    }
    answer.push(rankNum);
  }
  return answer;
}

const score = [87, 89, 92, 100, 76];

console.log(solution(score));

function otherSolution(score) {
  let scoreLength = score.length;
  let answer = Array(scoreLength);
  for (let i = 0; i < score.length; i++) {
    answer[i] = 1;
    for (let j = 0; j < score.length; j++) {
      if (score[i] < score[j]) {
        answer[i]++;
      }
    }
  }
  return answer;
}

otherSolution(score);
