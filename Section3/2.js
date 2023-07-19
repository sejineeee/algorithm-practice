// 유효한 팰린드롬
// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 한다.
// 해당 문자열이 팰린드롬이면 'YES' 아니면 'NO' 출력
// 단, 회문 검사시 알파벳만 가지고 회문 검사, 대소문자 구분하지 않음
// 알파벳 이외의 문자들 무시

function solution(str) {
  let answer = "";
  const splitStr = [...str.split("")];
  const reversedSplit = splitStr.reverse();
  if (splitStr === reversedSplit) {
    return (answer = "YES");
  }
  answer = "NO";
}

const str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
