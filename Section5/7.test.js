const checkAnagram = require("./7");

describe("function checkAnagram", () => {
  it("두 문자열을 검사하여 애너그램이면 YES를 반환한다", () => {
    const str1 = "AaCbcBdEf";
    const str2 = "acbEABCfd";

    const result = checkAnagram(str1, str2);
    expect(result).toBe("YES");
  });

  it("두 문자열을 검사하여 애너그램이 아니라면 NO를 반환한다", () => {
    const str1 = "AaCbcBdEF";
    const str2 = "acbEABCdd";

    const result = checkAnagram(str1, str2);

    expect(result).toBe("NO");
  });
});
