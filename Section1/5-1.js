// 배열의 내장함수로도 최솟값, 최댓값을 구할 수 있다.
// Math.min() Math.max()

function mathMethodSolution(arr) {
  let answer = Math.min(...arr);
  let maxAnswer = Math.max(...arr);
  console.log(maxAnswer);
  return answer;
}

// ... 전개연산자를 사용하고 싶지 않다면  apply를 사용해야 된다.
//  Math.min.apply(null, arr)
// 첫번째 인자는 객체, 두번째 인자에 배열을 넣어준다.
// 여기서는 첫번째 인자에 null을 넣어줘야 된다.
// 다른 곳에서는 this를 이용해서 컨트롤 할 수 있을 때 넣어주는 것임

function applySolution(arr) {
  let answer = Math.min.apply(null, arr)
  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];

console.log(mathMethodSolution(arr));
console.log(applySolution(arr));