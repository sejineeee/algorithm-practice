// 10부제 시행
// 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 운행 금지
// 7대의 자동차 번호의 끝자리 수가 주어졌을 때, 위반하는 자동차의 대수를 출력하는 프로그램

function solution(day, arr) {
  let answer = 0;
  for (const number of arr) {
    if (number % 10 === day) {
      answer++;
    }
  }
  return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));

// for ... of 문
// 반복 가능한 객체(Araay, Map, Set, String, TypedArray, arguments 객체 등)에 대해
// 반복하고 각 개별 속성값에 대해 실행되는 문이 있을 경우 호출하는 루프 생성

// 처음에 내가 생각했던 방법
// 숫자는 문자열이 아닌데, 문자열처럼 배열의 인덱스를 이용해서
// 마지막 수를 비교할 수 있을거라고 생각한 부분에서 잘못됐었다.
// function solution(day, arr) {
//   let answer = 0;
//   for (const number of arr) {
//     if (number[number.length - 1] === day) {
//       return (answer += 1);
//     }
//   }
//   return answer;
// }
