// 자릿수의 합
// N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구함
// 그 합이 최대인 자연수를 출력하는 프로그램
// 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 함

function plusOfDigit(...numbers) {
  let compareNum = 0;
  let result = 0;

  if (!numbers.length) {
    throw new Error("값을 전달해주세요");
  }

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      throw new Error("자연수만 전달해주세요");
    }

    let strToNum = numbers[i].toString();
    let answer = 0;

    for (let j = 0; j < strToNum.length; j++) {
      answer += Number(strToNum[j]);
    }

    if (!compareNum) {
      compareNum = answer;
    } else if (compareNum < answer) {
      compare = answer;
      result = numbers[i];
    } else if (compareNum === answer) {
      numbers[i] > result ? (result = numbers[i]) : result;
    }
  }
  return result;
}

plusOfDigit(128, 460, 603, 40, 521, 137, 123);

module.exports = plusOfDigit;
