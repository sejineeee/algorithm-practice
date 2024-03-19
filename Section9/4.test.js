const getMinJumpingCount = require('./4');

describe('function getMinJumpingCount', () => {
  it('사용자의 위치와 송아지의 위치가 주어지면 사용자가 송아지 위치까지 가는 최소 점프 횟수를 출력한다', () => {
    const result = getMinJumpingCount(8, 3);

    expect(result).toBe(5);
  });
});
