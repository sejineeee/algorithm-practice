const checkDesignedSubjects = require('./7');

describe('function checkDesignedSubjects', () => {
  it('필수과목과 수업설계 데이터를 전달받아 설계가 잘되었다면 YES를 반환한다', () => {
    const requiredSubjects = 'DFB';
    const designedSubjects = 'ACDSEFQB';

    const result = checkDesignedSubjects(requiredSubjects, designedSubjects);

    expect(result).toBe('YES');
  });

  it('필수과목과 수업설계 데이터를 전달받아 설계가 잘못되었다면 NO를 반환한다', () => {
    const requiredSubjects = 'CBA';
    const designedSubjects = 'GEADBC';

    const result = checkDesignedSubjects(requiredSubjects, designedSubjects);

    expect(result).toBe('NO');
  });

  it('수업설계의 길이가 30 이상일 경우 30 이하 안내 문구를 반환한다', () => {
    const requiredSubjects = 'CBA';
    const designedSubjects = 'ABCDEFGHIKJLMNOPQRSTUVWXYZWERTW';

    expect(() => {
      checkDesignedSubjects(requiredSubjects, designedSubjects);
    }).toThrowError('수업설계의 길이는 30자 이하여야 됩니다');
  });
});
