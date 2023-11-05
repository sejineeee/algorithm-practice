// 교육과정 설계
// 1년 과정의 수업계획, 필수 과목 O, 순서 O, 이수 필수
// 수업계획서상의 각 과목은 무조건 이수된다고 가정
// 수업설계가 잘된 것 -> "YES", 잘못된 것 -> "NO" 출력

function checkDesignedSubjects(required, designed) {
  if (designed.length > 30) {
    throw new Error('수업설계의 길이는 30자 이하여야 됩니다');
  }
  const requiredSubjects = required.split('');
  const designedSubjects = designed.split('');

  let result = '';

  designedSubjects.forEach((subject) => {
    if (requiredSubjects.includes(subject)) {
      if (subject === requiredSubjects[0]) {
        requiredSubjects.shift();
      }
    }

    result = 'NO';

    if (!requiredSubjects.length) {
      result = 'YES';
    }
  });

  return result;
}

const requiredSubjectsString = 'CBA';
const designedSubjectsString = 'CBDAGE';

console.log(
  checkDesignedSubjects(requiredSubjectsString, designedSubjectsString)
);

module.exports = checkDesignedSubjects;
