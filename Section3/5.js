// 문자열 압축
// 알파벳 대문자로 이루어진 문자열을 입력받음
// 같은 문자가 연속으로 반복되는 경우 반복되는 문자 바로 오른쪽에 반복 횟수 표기
// 이러한 방법으로 문자열을 압축하는 프로그램 작성
// 단, 반복횟수가 1인 경우 생략

function compressString(string) {
  let result = [];
  let number = 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i - 1] && string[i] !== string[i + 1]) {
      result.push(string[i]);
      number = 1;
    } else {
      if (string[i] === string[i + 1]) {
        number += 1;
      } else {
        result.push(string[i]);
        result.push(number);
      }
    }
  }
  return result.join("");
}

const str = "KKHSSSSSSSE";

console.log(compressString(str));

module.exports = compressString;
