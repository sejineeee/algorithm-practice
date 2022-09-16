// 보이는 학생
// N(1 <= N <= 1000)명의 학생을 일렬로 세움
// 키가 앞에서부터 순서대로 주어짐 (앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않음)
// 선생님이 볼 수 있는 학생의 수를 구하는 프로그램

function solution(heights) {
  let answer = 1,
    max = heights[0];
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] > max) {
      answer += 1;
      max = heights[i];
    }
  }
  return answer;
}

let heights = [130, 135, 148, 140, 145, 150, 153];
console.log(solution(heights));

// 첫 번째 도전
// function solution(heights) {
//   let answer = [];
//   answer.push(heights[0]);
//   for (let i = 1; i < heights.length; i++) {
//     if (heights[i - 1] < heights[i]) {
//       answer.push(heights[i]);
//     }
//   }
//   return answer;
// }

// 처음에는 코드를 이렇게 짜봤으나, 결과는 [130, 135, 148, 145, 150, 153]이 된다.
// 하지만 145 친구는 148 친구보다 작기 때문에 보이지 않는다. 그러면 어떻게 해야 될까?
// 보이는 애들의 배열에서 다시 해주면 된다고 생각한다.

// function solution(heights) {
//   let answer = [];
//   answer.push(heights[0]);
//   for (let i = 1; i < heights.length; i++) {
//     for (let j = 0; j < answer.length; j++) {
//       if (answer[j] < heights[i]) {
//         answer.push(heights[i]);
//       }
//     }
//   }
//   return answer;
// }
// 흠 이렇게 하면 계속 for 문을 돌면서 똑같은 수가 배열에 계속 추가가 된다.
