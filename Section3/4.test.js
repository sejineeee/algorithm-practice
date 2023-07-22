const getMinDistance = require("./4");

describe("function getMinDistance", () => {
  context("if the target character exists in the string", () => {
    it("return an array of minimum distance from target character", () => {
      const str = "teammate";
      const target = "e";
      const result = getMinDistance(str, target);

      expect(result).toStrictEqual([1, 0, 1, 2, 3, 2, 1, 0]);
    });
  });
  context("if the target character doesn't exist in the string", () => {
    it("return an array of 0", () => {
      const str = "potato";
      const target = "e";
      const result = getMinDistance(str, target);

      expect(result).toStrictEqual([0, 0, 0, 0, 0, 0]);
    });
  });
});
