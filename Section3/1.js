// 회문 문자열
// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 한다.
// 회문 문자열이면 "YES"
// 회문 문자열이 아니면 "NO"
// 대소문자를 구분하지 않는다.

function solution(str) {
  let answer = "";
  const word = str.toUpperCase();
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] === word[str.length - 1 - i]) {
      return (answer = "Yes");
    } else {
      return (answer = "No");
    }
  }
  return answer;
}

const str = "gooG";
const str2 = "Food";

console.log(solution(str));
console.log(solution(str2));
