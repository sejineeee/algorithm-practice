// 멘토링
// M번의 수학테스트 등수를 가지고 멘토와 멘티를 정함
// 멘토는 M번의 수학테스트에서 모두 멘티보다 등수가 앞서야 함
// M번의 수학성적이 주어지면 짝을 만들 수 있는 경우 총 구하기

// 첫 번째 줄에 반 학생 수 N(1 <= N <= 20)과 M(1<= M <= 10)이 주어짐
// 두 번째 줄부터 M개의 줄에 걸쳐 수학테스트 결과가 학생 번호로 주어짐(학생 번호가 1등, 2등, ...N등 순으로 표현)
// 만약 한 줄에 N= 4이고, 테스트 결과가 3 4 1 2로 입력되었다면
// 3번 학생이 1등, 4번 학생이 2등, 1번 학생이 3등, 2번 학생이 4등을 의미함

function checkDuplicationStudent(students) {
  for (let i = 0; i < students.length; i++) {
    let checkList = [];
    for (let j = 0; j < students[i].length; j++) {
      if (checkList.includes(students[i][j])) {
        throw new Error("중복된 학생이 있으니 확인해주세요");
      } else {
        checkList.push(students[i][j]);
      }
    }
  }
}

function getMentoring(rankDatas) {
  let n = rankDatas[0].length;
  let m = rankDatas.length;

  let mentoringCase = [];
  let answer = 0;
  checkDuplicationStudent(rankDatas);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let mentoringList = [];
      if (i === j) {
        continue;
      }
      for (let k = 0; k < m; k++) {
        let pi = 0;
        let pj = 0;
        for (let s = 0; s < n; s++) {
          if (rankDatas[k][s] === i) {
            pi = s;
          }
          if (rankDatas[k][s] === j) {
            pj = s;
          }
        }
        if (pi < pj) {
          mentoringList.push([i, j]);
        }
      }
      if (mentoringList.length === m) {
        mentoringCase.push(mentoringList[0]);
      }
    }
  }
  answer = mentoringCase.length;
  return answer;
}

const rankList = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

console.log(getMentoring(rankList));

module.exports = getMentoring;
