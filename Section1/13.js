// 대소문자 변환
// 대문자는 소문자로 소문자는 대문자로 변환하여 출력
// 입력 : 문자열의 길이는 100을 넘지 않음
// 출력 : 대문자 -> 소문자, 소문자 -> 대문자

function solution(str) {
  let answer = "";
  for (const s of str) {
    if (s === s.toUpperCase()) {
      answer += s.toLowerCase();
    } else {
      answer += s.toUpperCase();
    }
  }
  return answer;
}

let str = "StuDY";
console.log(solution(str));
