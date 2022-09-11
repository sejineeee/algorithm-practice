// 대문자 찾기
// 한 개의 문자열 입력받아 알파벳 대문자가 몇 개 있는지
// 입력 : 첫 줄에 문자열 입력, 길이는 100을 넘지 않음
// 출력 : 첫 줄에 대문자 개수 출력

function solution(str) {
  let answer = 0;
  for (const s of str) {
    if (s === s.toUpperCase()) {
      answer += 1;
    }
  }
  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));
