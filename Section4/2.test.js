const getPrimeNum = require("./2");

describe("function getPrimeNum", () => {
  it("the reverse of a natural number is a prime number, return the primes in order", () => {
    const result = getPrimeNum(98, 38, 48, 500, 110, 93, 32, 79);

    expect(result).toHaveLength(6);
    expect(result).toStrictEqual([89, 83, 5, 11, 23, 97]);
  });

  it("none of the reverse of a natural number is a prime number, return an empty array", () => {
    const result = getPrimeNum(900, 48, 64, 39, 24, 94, 75);

    expect(result).toHaveLength(0);
    expect(result).toStrictEqual([]);
  });
});
