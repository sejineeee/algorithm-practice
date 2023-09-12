// 올바른 괄호
// 괄호가 입력되면 올바른 괄호이면 "YES", 올바르지 않으면 "NO"를 출력
// (())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아니다

function findParentheses(p) {
  const stack = [];
  let result = null;

  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") {
      stack.push(p[i]);
    } else if (p[i] === ")") {
      let popValue = stack.pop();
      if (!popValue) {
        return (result = "NO");
      }
    } else {
      throw new Error("괄호가 아닌 문자열이 포함되어 있습니다");
    }
  }

  if (stack.length === 0) {
    return (result = "YES");
  } else {
    return (result = "NO");
  }
}

const parentheses = "(()(()))(()";

console.log(findParentheses(parentheses));

module.exports = findParentheses;
