// 최대 부분 증가수열
// N개의 자연수로 이루어진 수열이 주어짐
// 그 중에서 가장 길게 증가하는 원소들의 집합을 찾는 프로그램을 작성
// 작은 수에서 큰 수로 증가함

// 해당 숫자를 증가수열의 마지막 숫자로 생각하며 구해야 된다

function getLongestIncreasingSubSeq(list) {
  const dynamicList = new Array(list.length).fill(0);

  let result = 0;

  dynamicList[0] = 1;

  for (let i = 1; i < list.length; i++) {
    let max = 0;

    for (let j = 0; j < i; j++) {
      if (list[i] > list[j] && dynamicList[j] > max) {
        max = dynamicList[j];
      }
    }

    dynamicList[i] = max + 1;

    result = Math.max(result, dynamicList[i]);
  }

  return result;
}

const sequence = [5, 3, 7, 8, 6, 2, 9, 4];
console.log(getLongestIncreasingSubSeq(sequence));
