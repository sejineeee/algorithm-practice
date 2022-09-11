// 한 개의 문자열 입력받고, 특정 문자를 입력받아
// 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램
// 문자열의 길이는 100을 넘지 않음
// 입력 : 첫 줄에 문자열, 두 번째 줄에 특정 문자
// 출력 : 첫 줄에 해당하는 문자의 개수

function solution(s, t) {
  let answer = 0;
  for (const el of s) {
    if (el === t) {
      answer += 1;
    }
  }
  return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
