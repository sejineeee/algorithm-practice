// 중복단어제거
// N개의 문자열 입력되면 중복된 문자열 제거하고 출력
// 출력하는 문자열은 원래 순서 유지
// 입력 : 첫 줄에 자연수 N이 주어짐(3 <= N <= 30
// 두 번째 줄부터 N개의 문자열 주어짐. 길이는 100을 넘지 않음

function solution(str) {
  let answer = [];
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === i) {
      answer.push(str[i]);
    }
  }
  return answer;
}

let words = ["good", "time", "good", "time", "student"];
console.log(solution(words));
