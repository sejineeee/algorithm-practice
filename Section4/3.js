// 멘토링
// M번의 수학테스트 등수를 가지고 멘토와 멘티를 정함
// 멘토는 M번의 수학테스트에서 모두 멘티보다 등수가 앞서야 함
// M번의 수학성적이 주어지면 짝을 만들 수 있는 경우 총 구하기

// 첫 번째 줄에 반 학생 수 N(1 <= N <= 20)과 M(1<= M <= 10)이 주어짐
// 두 번째 줄부터 M개의 줄에 걸쳐 수학테스트 결과가 학생 번호로 주어짐(학생 번호가 1등, 2등, ...N등 순으로 표현)
// 만약 한 줄에 N= 4이고, 테스트 결과가 3 4 1 2로 입력되었다면
// 3번 학생이 1등, 4번 학생이 2등, 1번 학생이 3등, 2번 학생이 4등을 의미함

function getMentoring(rankDatas) {
  let totalCase = [];
  rankDatas.forEach((rankData) => {
    for (let i = 0; i < rankData.length; i++) {
      for (let j = 0; j < rankData.length; j++) {
        if (rankData[i] < rankData[j]) {
          totalCase.push([i + 1, j + 1]);
        }
      }
      console.log(totalCase);
      // 시험이 총 3번인데, 모두 멘토가 등수가 앞서는 걸 구하는 로직을 생각해보기
    }
    console.log("-----");
  });
}

const rankList = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

console.log(getMentoring(rankList));
