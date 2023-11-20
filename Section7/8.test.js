const findMaxConferenceRoom = require('./8');

describe('function findMaxConferenceRoom', () => {
  it('n개의 회의들이 주어지면 각 회의가 겹치지 않으며 사용할 수 있는 최대 수를 반환한다.', () => {
    const conferenceList = [[3, 3], [1, 3], [2, 3]];
    
    const result = findMaxConferenceRoom(conferenceList);

    expect(result).toBe(2);
  })

  it('n개의 회의가 시작하는 시간과 끝나는 시간이 동일한 경우 사용할 수 있는 수 1을 반환한다.', () => {
    const conferenceList = [[1, 3], [1, 3], [1, 3]];

    const result = findMaxConferenceRoom(conferenceList);

    expect(result).toBe(1);
  })
})