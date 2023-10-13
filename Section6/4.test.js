const calculate = require("./4");

describe("function calculate", () => {
  it("간단한 연산이 포함된 후위연산식을 연산한 값을 출력한다", () => {
    const str = "54+2/";
    const result = calculate(str);

    expect(result).toBe(4.5);
  });
  it("복잡한 표현식이 포함된 후위연산식을 연산한 값을 출력한다", () => {
    const str = "54*73-/3*2-";
    const result = calculate(str);

    expect(result).toBe(13);
  });
});
