// 수열 추측하기
// 가장 윗줄에 1부터 N까지의 숫자가 한 개씩 적혀있음
// 둘째 줄부터 차례대로 파스칼의 삼각형처럼 위의 두개를 더한 값이 저장
// N과 가장 밑에 있는 숫자가 주어져 있을 때 가장 윗줄에 있는 숫자를 구하는 프로그램
// 답이 여러가지가 나오는 경우에는 사전순으로 가장 앞에 오는 것을 출력

function guessSequence(N, totalSum) {
  const memory = new Map();

  const combinationArr = Array(N).fill(0);
  const numberArr = Array(N).fill(0);
  const visitedArr = Array(N).fill(0);

  let result;

  const combination = (n, r) => {
    const key = `${n}:${r}`;

    if (memory.has(key)) {
      return memory.get(key);
    }

    if (n === r || r === 0) {
      return 1;
    } else {
      const value = combination(n - 1, r - 1) + combination(n - 1, r);

      memory.set(key, value);

      return value;
    }
  };

  const recursiveFunc = (level, sum) => {
    if (result) {
      return;
    }

    if (level === N && sum === totalSum) {
      result = [...numberArr];
      return;
    } else {
      for (let i = 1; i <= N; i++) {
        if (!visitedArr[i]) {
          visitedArr[i] = 1;
          numberArr[level] = i;
          recursiveFunc(
            level + 1,
            sum + combinationArr[level] * numberArr[level]
          );
          visitedArr[i] = 0;
        }
      }
    }
  };

  for (let i = 0; i < N; i++) {
    combinationArr[i] = combination(N - 1, i);
  }

  recursiveFunc(0, 0);

  return result.join(' ');
}

console.log(guessSequence(4, 16));

module.exports = guessSequence;
