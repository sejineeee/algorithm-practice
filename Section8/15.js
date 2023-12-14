// 수들의 조합
// N개의 정수가 주어짐
// 그 숫자들 중 K개를 뽑는 조합의 합이 임의의 정수 M의 배수인 개수가 몇 개인지
// 예 : 5개의 숫자 2 4 5 8 12, 3개를 뽑은 조합의 합이 6의 배수인 조합을 찾으면 4+8+12, 2+4+12로 2가지

function getMultipleCombination(list, count, multipleNumber) {
  const result = [];

  const generateCombination = (current, start, sum) => {
    if (current.length === count && sum % multipleNumber === 0) {
      result.push([...current]);
    } else {
      for (let i = start; i < list.length; i++) {
        current.push(list[i]);
        generateCombination([...current], i + 1, sum + list[i]);
        current.pop();
      }
    }
  };

  generateCombination([], 0, 0);

  return result;
}

const list = [2, 4, 5, 8, 12];
const result = getMultipleCombination(list, 3, 6);

console.log(result.length);
