const plusOfDigit = require("./1");

describe("function plusOfDigit", () => {
  it("returns the number with the largest sum of its digit", () => {
    const result = plusOfDigit(488, 587, 695, 785, 794, 776, 767, 758, 794);

    expect(result).toBe(794);
  });

  it("no value is passed to function, it throws an error message", () => {
    const errorMessage = "값을 전달해주세요";

    expect(() => {
      plusOfDigit();
    }).toThrow(errorMessage);
  });
  it("non-natural number is passed, it throws an error message", () => {
    const errorMessage = "자연수만 전달해주세요";

    expect(() => {
      plusOfDigit(128, -283, 293, 333);
    }).toThrow(errorMessage);
  });
});
