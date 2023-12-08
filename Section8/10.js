// 순열 구하기
// 10 이하의 N개의 자연수가 주어지면
// 이 중 M개를 뽑아 일렬로 나열하는 방법 모두 출력

function getPermutation(numberList, count) {
  const arr = Array(count).fill(0);
  const visitedArr = Array(numberList.length).fill(0);

  const resultArray = [];

  const recursiveFunc = (level) => {
    if (level === count) {
      resultArray.push([...arr]);
      return;
    } else {
      for (let i = 0; i < numberList.length; i++) {
        if (!visitedArr[i]) {
          visitedArr[i] = 1;
          arr[level] = numberList[i];
          recursiveFunc(level + 1);
          visitedArr[i] = 0;
        }
      }
    }
  };

  recursiveFunc(0);

  console.log(resultArray);
  return resultArray.length;
}

const list = [3, 6, 9];

console.log(getPermutation(list, 2));
