// 중복순열 구하기
// 1부터 N까지 번호가 적힌 구슬이 있음
// 중복을 허락하여 M번을 뽑아 일렬로 나열하는 방법을 모두 출력

function getDuplicationPermutation(number, count) {
  const arr = Array.from({ length: count}, () => 0);
  const resultList = [];

  const recursiveFunc = (level) => {
    if(level === count) {
      const stringArr = JSON.stringify(arr);
      const parsedArr = JSON.parse(stringArr);
      resultList.push(parsedArr);  
    } else {
      for(let i = 1; i <= number; i++) {
        arr[level] = i;
        recursiveFunc(level + 1);
      }
    }
  }

  recursiveFunc(0);

  console.log(resultList);
  console.log(resultList.length);
}

getDuplicationPermutation(3, 2);

module.exports = getDuplicationPermutation;