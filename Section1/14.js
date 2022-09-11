// 가장 긴 문자열
// N개의 문자열 중 가장 긴 문자열 출력하는 프로그램
// 입력 : 첫 줄에 자연수 N(3 <= N <= 30)
// 두 번째 줄에 N개의 문자열. 길이는 100을 넘지 않고, 서로 길이가 다름

function solution(s) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (answer.length < s[i].length) {
      answer = s[i];
    }
  }
  // s.map((item) => console.log(item.length));
  return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));

// 다른 방법

function otherSolution(s) {
  let answer = "",
    max = Number.MIN_SAFE_INTEGER;
  for (const el of s) {
    if (el.length > max) {
      max = el.length;
      answer = el;
    }
  }
  return answer;
}

console.log(otherSolution(str));
