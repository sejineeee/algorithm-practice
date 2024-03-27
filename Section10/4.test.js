const getMinChange = require('./4');

describe('function getMinChange', () => {
  it('여러 단위의 동전이 주어졌을 때 거슬러줄 동전의 갯수가 가장 적은 수를 출력한다', () => {
    const count = 5;
    const coinList = [1, 2, 5, 10, 20];
    const changeMoney = 108;

    const result = getMinChange(count, coinList, changeMoney);

    expect(result).toBe(8);
  });

  it('동전의 갯수, 동전의 종류, 거슬러 줄 금액 중 하나라도 주어지지 않으면 예외를 발생시킨다', () => {
    const count = 5;
    const coinList = [1, 2, 5, 10, 20];

    expect(() => {
      getMinChange(count, coinList);
    }).toThrowError('함수에 입력값이 모두 주어졌는지 확인해주세요');
  });
});
