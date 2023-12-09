// 팩토리얼
// 자연수 N을 입력하면 N값을 구하세요.
// N! = n*(n-1)*(n-2)* ... *2*1
// 만약 N = 5라면 5!=5*4*3*2*1 = 120

function factorial(number) {
  const recursiveFunc = (num) => {
    if (num === 1) {
      return 1;
    } else {
      return num * recursiveFunc(num - 1);
    }
  };

  const result = recursiveFunc(number);

  return result;
}

console.log(factorial(5));

module.exports = factorial;
