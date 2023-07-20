// 가장 짧은 문자거리
// 첫 번째 줄에 문자열 s와 문자 t가 주어진다.
// 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 구해야된다.
// 문자열과 문자는 소문자만 주어지고, 문자열 길이는 100을 넘지 않음

function getMinDistance(s, t) {
  let answer = 0;
  let arr = [];

  for (let x of s) {
    if (x === t) {
      answer = 0;
      arr.push(answer);
    } else {
      answer += 1;
      arr.push(answer);
    }
  }
  return arr;
}

const str = "teachermode";

getMinDistance(str, "e");
