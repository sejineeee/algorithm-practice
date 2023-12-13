// 조합 구하기
// 1부터 N까지 번호가 적힌 구슬이 있음
// 이 중 M개를 뽑는 방법의 수를 출력하는 프로그램
// N(3<=N<=10), M(2<=M<=N)

function getCombination(number, count) {
  const visitedArr = Array(count).fill(0);
  const resultList = [];

  const recursiveFunc = (level, receiveNum) => {
    if (level === count) {
      resultList.push([...visitedArr]);
      return;
    } else {
      for (let i = receiveNum; i <= number; i++) {
        visitedArr[level] = i;
        recursiveFunc(level + 1, i + 1);
      }
    }
  };

  recursiveFunc(0, 1);
  console.log(resultList);
  console.log(resultList.length);
}

getCombination(4, 2);
