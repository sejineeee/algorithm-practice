// 난쟁이가 원래 7명이었다가 돌아와보니 9명이 되었음
// 일곱 난쟁이의 키의 합이 100
// 입력 : 100을 넘지 않는 자연수, 키는 모두 다름
// 출력 : 입력된 순서대로 출력

function solution(arr) {
  let answer = arr;
  let sum = arr.reduce((result, recent) => result + recent, 0);
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (100 === sum - (arr[i] + arr[j])) {
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));

// array.reduce(callback[, initialValue])
// callback 함수에 들어가는 인자
// array.reduce((누적, 현재) => { 실행문 }, 초기값)
// reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고, 하나의 결과값 반환
// b가 현재값, a에다가 누적함, 0은 a에 대한 초기값을 의미함
