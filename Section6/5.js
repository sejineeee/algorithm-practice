// 쇠막대기
// 쇠막대기는 자신보다 긴 쇠막대기 위에만 놓일 수 있음
// 쇠막대기를 다른 쇠막대기 위에 놓는 경우 완전히 포함되도록 놓되, 끝점은 겹치지 않도록 놓음
// 각 쇠막대기를 자르는 레이저는 적어도 하나 존재함
// 레이저는 어떤 쇠막대기의 양 끝점과도 겹치지 않음

function getCutStickAmount(parenthesesString) {
  if (parenthesesString === '') {
    throw new Error('데이터를 확인해주시길 바랍니다');
  }

  const stack = [];
  let amount = 0;

  const parenthesisArray = parenthesesString.split('');

  parenthesisArray.forEach((parentheses, index, array) => {
    if (parentheses === '(') {
      stack.push(parentheses);
    }

    if (parentheses === ')' && array[index - 1] === '(') {
      stack.pop();
      amount += stack.length;
    }

    if (parentheses === ')' && array[index - 1] === ')') {
      stack.pop();
      amount += 1;
    }
  });

  return amount;
}

const data = '(((()(()()))(())()))(()())';
console.log(getCutStickAmount(data));

module.exports = getCutStickAmount;
