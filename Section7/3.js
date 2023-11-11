// Special Sort(구글 인터뷰)
// N개의 정수가 입력되면 값을 정렬해야 됨
// 음의 정수는 앞쪽에 양의 정수는 뒷쪽에
// 양의 정수와 음의 정수의 순서에는 변함이 없어야 됨 (이 부분이 중요함)
// 숫자 0은 입력되지 않음

function specialSort(arr) {
  let count = 0;
  const list = [...arr];

  while (count < list.length) {
    list.forEach((item, index, arr) => {
      if (item === 0) {
        throw new Error('숫자 0을 제외하고 입력해주세요.');
      }

      if (item > 0 && arr[index + 1] < 0) {
        [list[index], list[index + 1]] = [list[index + 1], list[index]];
      }
    });

    count += 1;
  }

  return list;
}

const list = [1, 2, 3, -3, -2, 5, 6, -6];

console.log(specialSort(list));

module.exports = specialSort;
