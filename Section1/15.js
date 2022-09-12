// 가운데 문자 출력
// 소문자 문자열의 가운데 문자를 출력하는 프로그램
// 단어의 길이가 짝수일 경우 가운데 2개 문자 출력
// 입력 : 문자열의 길이는 100 넘지 않음
// 출력 : 가운데 문자 출력

function solution(s) {
  let answer = "";
  if (s.length % 2 === 0) {
    let num = s.length / 2 - 1;
    answer = s.slice(num, num + 2);
  } else {
    let num = Math.floor(s.length / 2);
    answer = s.slice(num, num + 1);
  }
  return answer;
}

let str = "study";
let str2 = "good";

console.log(solution(str));
console.log(solution(str2));

// substring을 이용한 방법
// substring() 메서드는 시작 인덱스부터 종료인덱스 전까지 문자열 반환
// str.substring(indexStart [, indexEnd])
// 종료인덱스는 미포함된다. 전까지임!

function otherSolution(s) {
  let answer = "";
  if (s.length % 2 === 0) {
    let num = s.length / 2 - 1;
    answer = s.substring(num, num + 2);
  } else {
    let num = Math.floor(s.length / 2);
    answer = s.substring(num, num + 1);
  }
  return answer;
}

console.log(otherSolution(str));
console.log(otherSolution(str2));
