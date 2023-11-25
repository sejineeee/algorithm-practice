const getMaxDistance = require('./12');

describe('function getMaxDistance', () => {
  it('C마리의 말을 배치했을 때 가장 가까운 두 말의 거리가 최대가 되는 값을 반환한다', () => {
    const horseCoordinateList = [1, 2, 4, 7, 9, 13, 17, 22, 28, 30, 34];
    const totalHorseNumber = 4;

    const result = getMaxDistance(horseCoordinateList, totalHorseNumber);

    expect(result).toBe(9);
  })

  it('말의 수와 마구간의 수가 동일한 경우, 가장 가까운 두 말의 거리가 최대가 되는 값을 반환한다', () => {
    const horseCoordinateList = [1, 5, 8, 10, 15];
    const totalHorseNumber = 5;

    const result = getMaxDistance(horseCoordinateList, totalHorseNumber);

    expect(result).toBe(2);
  })
})