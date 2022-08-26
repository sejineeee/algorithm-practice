// 최솟값 구하기

// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성
// 입력 : 첫 번째 줄에 7개의 수가 주어진다
// 출력 : 첫 번째 줄에 가장 작은 값을 출력한다

function solution(arr) {
  let answer;
  let minNumber = arr[0];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < minNumber) {
      minNumber = arr[i];
    }
  }
  answer = minNumber;
  return answer;
}

// Number.MAX_SAFE_INTEGER
function otherSolution(arr){         
  let answer, min = Number.MAX_SAFE_INTEGER;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < min) {
      min = arr[i];
    }
  }
  answer = min;
  return answer;

}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));

