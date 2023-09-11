const findParentheses = require("./1");

describe("function findParentheses", () => {
  it("괄호의 쌍이 올바르게 있는 괄호 문자열이 전달되면 YES를 반환한다", () => {
    const parentheses = "(())()((()()))";

    const result = findParentheses(parentheses);

    expect(result).toBe("YES");
  });

  it("괄호의 쌍이 올바르게 있지 않은 괄호 문자열이 전달되면 NO를 반환한다", () => {
    const parentheses = "())()";

    const result = findParentheses(parentheses);

    expect(result).toBe("NO");
  });

  it("전달된 괄호 문자열에 괄호가 아닌 문자열이 있으면 에러를 반환한다.", () => {
    const parentheses = "()s()";

    expect(() => {
      findParentheses(parentheses);
    }).toThrow();
  });
});
