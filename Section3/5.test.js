const compressString = require("./5");

describe("compressString function", () => {
  context("if you have repeated characters in a string", () => {
    it("returns a string with the number of iterations to the right of the repeated character", () => {
      const str = "APPLE";
      const result = compressString(str);

      expect(result).toBe("AP2LE");
    });
  });
  context("if no characters are repeated in a string", () => {
    it("returns a string", () => {
      const str = "ABCDEFG";
      const result = compressString(str);

      expect(result).toBe("ABCDEFG");
    });
  });
});
