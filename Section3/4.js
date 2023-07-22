// 가장 짧은 문자거리
// 첫 번째 줄에 문자열 s와 문자 t가 주어진다.
// 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 구해야된다.
// 문자열과 문자는 소문자만 주어지고, 문자열 길이는 100을 넘지 않음

function getMinDistance(s, t) {
  let answer = 0;
  let answerArr = [];

  for (let i = 0; i < s.length; i++) {
    let distance = null;

    if (s[i] === t) {
      answer = 0;
      answerArr.push(answer);
      continue;
    } else {
      for (let j = 0; j < s.length; j++) {
        if (s[j] === t) {
          if (!distance) {
            distance = Math.abs(j - i);
          } else {
            distance = Math.min(distance, Math.abs(j - i));
          }
        }
      }
    }
    answerArr.push(distance);
  }
  return answerArr;
}

const str = "teachermode";

console.log(getMinDistance(str, "e"));

module.exports = getMinDistance;
