// 최대점수 구하기(DFS)
// 제한시간 M, N개의 문제 중 최대 점수를 얻을 수 있어야 됨
// 해당 문제는 해당 시간이 걸리면 푸는 걸로 간주

function getMaxScore(timeLimit, scoreList, requiredTimeList) {
  const N = scoreList.length;
  const arr = Array.from({ length: N }, () => 0);

  let result = 0;
  let resultList = [];

  const recursiveFunc = (index, sum, currentList) => {
    if(timeLimit < sum) {
      return 0;
    }

    if(index === N) {
      const value = currentList.reduce((a, b) => a + b, 0);

      if(result < value) {
        result = value;
        resultList = [...currentList];
      }
    } else {
      arr[index] = 1;
      recursiveFunc(index + 1, sum + requiredTimeList[index], [...currentList, scoreList[index]]);
      arr[index] = 0;
      recursiveFunc(index + 1, sum, currentList);
    }
  };

  recursiveFunc(0, 0, []);

  console.log(resultList);
  return result;
}

const time = 20;
const questionScores = [10, 25, 15, 6, 7];
const questionRequiredTime = [5, 12, 8, 3, 4];

console.log(getMaxScore(time, questionScores, questionRequiredTime))