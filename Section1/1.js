// 최솟값 구하기

function solution(a, b, c) {
  let answer;

  if (a > b) {
    answer = b;
  }
  answer = a;

  if (answer > c) {
    answer = c;
  } else {
    return answer
  }

}

console.log(solution(3, 7, 9));