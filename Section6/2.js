// 괄호 문자 제거
// 입력된 문자열에서 소괄호 () 사이에 존재하는 모든 문자를 제거하고
// 남은 문자만 출력하는 프로그램

function removeStr(s) {
  const stack = [];
  const resultString = [];
  for (const str of s) {
    let popValue = "";
    if (str === "(") {
      stack.push(str);
    } else if (str === ")") {
      popValue = stack.pop();
    }

    if (!stack.length && popValue !== "(") {
      resultString.push(str);
    }
  }

  return resultString.length === 0
    ? console.log("남은 문자가 없습니다")
    : resultString.join("");
}

const str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";

console.log(removeStr(str));

module.exports = removeStr;
