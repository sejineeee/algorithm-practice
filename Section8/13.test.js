const guessSequence = require('./13');

describe('function guessSequence', () => {
  it('가장 윗줄에 있는 숫자의 개수 N과 가장 밑에 있는 수가 전달되면 윗줄에 있는 숫자를 출력한다', () => {
    const result = guessSequence(5, 47);

    expect(result).toBe('2 1 4 3 5');
  });
});
