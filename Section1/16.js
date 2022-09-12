// 중복문자제거
// 소문자로 된 문자열이 입력되면 중복된 문자를 제거하고 출력
// 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지함

// indexOf를 이용
function solution(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    console.log(s[i], i, s.indexOf(s[i]));
    if (i === s.indexOf(s[i])) {
      answer += s[i];
    }
  }
  return answer;
}

let str = "ksekkset";
console.log(solution(str));
