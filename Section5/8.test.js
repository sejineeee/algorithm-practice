const checkAllAnagram = require("./8");

describe("function checkAllAnagram", () => {
  it("S문자열에서 T문자열과 애너그램이 되는 S의 부분 문자열 개수를 반환한다", () => {
    const string1 = "banana";
    const string2 = "an";

    const result = checkAllAnagram(string1, string2);

    expect(result).toBe(4);
  });

  it("T문자열이 S문자열의 길이랑 같은 경우 애너그램이 되는 S의 부분 문자열 개수를 반환한다", () => {
    const string1 = "banana";
    const string2 = "andiba";

    const result = checkAllAnagram(string1, string2);

    expect(result).toBe(0);
  });

  it("S문자열에서 T문자열과 애너그램이 되는 S의 부분 문자열이 없는 경우 0을 반환한다", () => {
    const string1 = "apple";
    const string2 = "bcd";

    const result = checkAllAnagram(string1, string2);

    expect(result).toBe(0);
  });
});
