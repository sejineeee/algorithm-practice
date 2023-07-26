// 뒤집은 소수
// N개의 자연수가 입력되면 각 자연수를 뒤집은 후
// 뒤집은 수가 소수이면 그 소수를 출력하는 프로그램
// 첫 자리부터의 연속된 0은 무시한다.

function getPrimeNum(...numbers) {
  let answer = [];
  numbers.map((number) => {
    let reverseNum = Number(number.toString().split("").reverse().join(""));

    if (reverseNum === 1) {
      return;
    } else if (
      reverseNum === 2 ||
      reverseNum === 3 ||
      reverseNum === 5 ||
      reverseNum === 7
    ) {
      answer.push(reverseNum);
    } else if (reverseNum % 2 === 0) {
      return;
    } else if (reverseNum % 3 === 0) {
      return;
    } else if (reverseNum % 5 === 0) {
      return;
    } else if (reverseNum % 7 === 0) {
      return;
    } else {
      answer.push(reverseNum);
    }
  });
  return answer;
}

getPrimeNum(32, 55, 62, 20, 250, 370, 200, 30, 100);

module.exports = getPrimeNum;
