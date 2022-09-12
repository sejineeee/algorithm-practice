// 가운데 문자 출력
// 소문자 문자열의 가운데 문자를 출력하는 프로그램
// 단어의 길이가 짝수일 경우 가운데 2개 문자 출력
// 입력 : 문자열의 길이는 100 넘지 않음
// 출력 : 가운데 문자 출력

function solution(s) {
  let answer = "";
  if (s.length % 2 === 0) {
    let num = s.length / 2 - 1;
    answer = s.slice(num, num + 2);
  } else {
    let num = Math.floor(s.length / 2);
    answer = s.slice(num, num + 1);
  }
  return answer;
}

let str = "study";
let str2 = "good";

console.log(solution(str));
console.log(solution(str2));
