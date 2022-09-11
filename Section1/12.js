// 대문자로 통일
// 문자열을 대문자로 모두 통일하여 출력하는 프로그램
// 입력 : 문자열, 길이는 100을 넘지 않음
// 출력 : 대문자로 통일된 문자열 출력

function solution(str) {
  let answer;
  answer = str.toUpperCase();
  return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));

// for...of 를 이용해서 풀어보면?
// 11번 대문자 찾기랑 비슷하게 생각해볼 수 있다.

function otherSolution(str) {
  let answer = "";
  for (const s of str) {
    if (s === s.toLowerCase()) {
      answer += s.toUpperCase();
    } else {
      answer += s;
    }
  }
  return answer;
}

console.log(otherSolution(str));
