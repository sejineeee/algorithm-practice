// 재귀함수를 이용한 이진수 출력
// 10진수 N이 입력되면 2진수로 변환하여 출력하는 프로그램
// 단, 재귀함수를 이용해서 출력해야 된다

function convertBinary(number) {
  let result = "";
  const recursiveFunc = (number) => {
    if(number === 0) {
      return;
    }
    
    recursiveFunc(parseInt(number / 2))
    result += number % 2;
  }

  recursiveFunc(number);

  return result;
}

console.log(convertBinary(11));