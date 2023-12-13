// 조합 구하기
// 1부터 N까지 번호가 적힌 구슬이 있음
// 이 중 M개를 뽑는 방법의 수를 출력하는 프로그램
// N(3<=N<=10), M(2<=M<=N)

function getCombination(number, count) {
  const result = [];

  const recursiveFunc = (current, start) => {
    if (current.length === count) {
      result.push([...current]);
      return;
    } else {
      for (let i = start; i <= number; i++) {
        current.push(i);
        recursiveFunc([...current], i + 1);
        current.pop();
      }
    }
  };

  recursiveFunc([], 1);

  return result;
}

const result = getCombination(4, 2);

console.log(result);
console.log(result.length);
