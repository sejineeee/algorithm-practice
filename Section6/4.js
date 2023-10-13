// 후위식 연산(postfix)
// 후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성
// 만약 3*(5+2)-9을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12
// 식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어짐

function calculate(expr) {
  const list = [];
  for (const x of expr) {
    const parsedNumber = parseInt(x);

    if (!Number.isNaN(parsedNumber)) {
      list.push(parsedNumber);
    } else {
      let num2 = list.pop();
      let num1 = list.pop();

      if (x === "+") {
        const sum = num1 + num2;
        list.push(sum);
      } else if (x === "-") {
        const minus = num1 - num2;
        list.push(minus);
      } else if (x === "*") {
        const multiply = num1 * num2;
        list.push(multiply);
      } else if (x === "/") {
        const divide = num1 / num2;
        list.push(divide);
      }
    }
  }

  return list[0];
}

const str = "352+*9-";

console.log(calculate(str));

module.exports = calculate;
