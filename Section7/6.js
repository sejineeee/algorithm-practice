// 장난꾸러기 현수
// 키가 가장 작은 학생부터 일렬로 키순으로 세움
// 현수는 짝꿍보다 키가 큰데, 앞 번호를 받고 싶어 짝꿍과 자리를 바꿈
// 현수가 받은 번호와 현수 짝꿍이 받은 번호를 차례로 출력

function sortNumber(arr) {
  const sortedArr = [ ...arr ];
  const result = [];

  sortedArr.forEach((item, index) => {
    for (let i = index - 1; i >= 0; i--) {
      if(item < sortedArr[i]) {
        sortedArr[i + 1] = sortedArr[i];
        sortedArr[i] = item;
      }
    }
  })
  
  arr.map((item, index) => {
    if(sortedArr[index] !== item) {
      result.push(index + 1);
    }
  })

  return result;
}

const list = [120, 125, 152, 130, 135, 135, 143, 127, 160];

console.log(sortNumber(list));