const removeStr = require("./2");

describe("function removeStr", () => {
  it("문자열이 전달되면 소괄호 사이에 존재하는 모든 문자를 제거하고 남은 문자를 반환한다", () => {
    const str = "(B(ANA)NA)GRA(SS(W)E)P(Q)E";

    const result = removeStr(str);

    expect(result).toBe("GRAPE");
  });

  it("전달된 문자열에 소괄호 사이에 존재하는 모든 문자를 제거하고 남은 문자가 없는 경우 남은 문자가 없음을 알려준다", () => {
    const log = jest.spyOn(global.console, "log");

    const str = "(B(ANAN)A)";

    removeStr(str);

    expect(log).toHaveBeenCalledWith("남은 문자가 없습니다");
  });
});
