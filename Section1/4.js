// 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성
// 입력 : 첫 번째 줄에 20이하의 자연수 N이 입력
// 출력 : 첫 번째 줄에 1부터 N까지의 합을 출력

function solution(n){
  let answer = 0;
  for(let i = 0; i < n; i++) {
   answer += i + 1; 
  }
  return answer;
}

console.log(solution(6));


// 풀이를 보면, 이런식으로도 푸는듯ㅎ ㅏ다.
function otherSolution(n) {
  let answer = 0;
  for(let i = 0; i <= n; i++) {
    answer = answer + i;
  }
  return answer;
}

console.log(otherSolution(6));