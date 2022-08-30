// 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고
// 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.
// 예를 들어, 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면
// 이들 중 홀수는 77, 41, 53, 85이므로 그 합은 256이 되고, 최소값은 41이 된다.
// 입력 : 첫 번째 줄에 자연수 7개 주어짐, 주어지는 자연수는 100보다 작음, 홀수는 반드시 1개 이상 존재
// 출력 : 첫째 줄에 홀수들의 합을 출력하고, 둘째 줄에 홀수들 중 최소값을 출력

function solution(arr) {
  let answer = []; // answer에 답 2개를 push 하기 위해서 배열로
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let num of arr) {
    if (num % 2 === 1) {
      sum += num;
      if (num < min) {
        min = num;
      }
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}

// for 문으로 바꾼다면 어떻게 바꿔볼 수 있을까?
function otherSolution(arr) {
  let answer = [];
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      sum += arr[i];
      if (arr[i] < min) {
        min = arr[i];
      }
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}
arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
console.log(otherSolution(arr));
