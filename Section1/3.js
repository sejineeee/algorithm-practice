// 연필 1다스는 12자루
// 학생 1인당 편힐 1자루씩 나누어 줄 때, 학생수(N명)를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램

function solution(n){
  let answer;
  answer = Math.ceil(n / 12);

  return answer;
}

console.log(solution(25));