const getCutStickAmount = require('./5');

describe('getCutStickAmount function', () => {
  it('잘려진 조각의 총 개수를 반환한다', () => {
    const data = '(()((()))((()))))))';

    const result = getCutStickAmount(data);

    expect(result).toEqual(15);
  });

  it('데이터를 입력하지 않은 경우 에러를 반환한다', () => {
    const data = '';

    expect(() => {
      getCutStickAmount(data);
    }).toThrowError('데이터를 확인해주시길 바랍니다');
  });
});
