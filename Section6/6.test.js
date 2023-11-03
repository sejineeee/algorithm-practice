const getPrinceToRescuePrincess = require('./6');

describe('getPrinceToRescuePrincess function', () => {
  it('왕자 N명과 특정한 수 K가 주어질 때 공주를 구하러 갈 왕자의 번호가 출력된다', () => {
    const princes = 10;
    const k = 7;

    const result = getPrinceToRescuePrincess(princes, k);

    expect(result).toEqual(9);
  });
});
