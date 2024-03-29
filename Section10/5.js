// 최대 점수 구하기(knapsack 알고리즘)
// 정보 올림피아드 대회에서 좋은 성적을 내기 위해 현수는 N개의 문제를 풀려고 함
// 각 문제를 풀었을 때 얻는 점수와 소요 시간이 주어지게 됨
// 제한 시간 M 안에 N개의 문제 중 최대 점수를 얻을 수 있도록 해야 됨
// (해당 시간이 걸리면 문제를 완료한 걸로 간주. 한 유형당 한 개만 풀 수 있음)
// 문제를 풀었을 때 점수, 문제를 푸는데 걸리는 시간

function getMaxScore(timeLimit, dataList) {
  const dynamicList = Array.from({ length: timeLimit + 1 }, () => 0);

  for (let i = 0; i < dataList.length; i++) {
    const [score, time] = dataList[i];

    for (let j = timeLimit; j >= time; j--) {
      dynamicList[j] = Math.max(dynamicList[j], dynamicList[j - time] + score);
    }
  }

  return dynamicList[timeLimit];
}

const list = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];

console.log(getMaxScore(20, list));
