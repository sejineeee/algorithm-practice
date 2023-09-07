const getVotingResult = require("./6");

describe("function getVotingResult", () => {
  it("문자열이 전달되면 가장 많이 쓰인 알파벳이 반환된다", () => {
    const str = "ABCCBCACDDEABBEDDEBA";
    const result = getVotingResult(20, str);

    expect(result).toBe("B");
  });

  it("문자열에 대소문자가 섞인 경우 대문자로 통일하여 가장 많이 쓰인 알파벳이 반환된다", () => {
    const str = "abbAABB";
    const result = getVotingResult(7, str);

    expect(result).toBe("B");
  });
});
