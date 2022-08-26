// 삼각형 판별하기
// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면
// 이 세 막대로 삼각형을 만들 수 있으면 "YES", 만들 수 없으면 "NO"를 출력한다.

// 입력 예제 1
// 6 7 11

// 입력 예제 1
// 13 33 17

// 삼각형을 만들 수 있는 조건 : 가장 긴 변의 길이는 다른 두 변 길이의 합보다 작아야 함


function solution(a, b, c){
  let answer, max;
  let sum= a+b+c;
  if (a > b) {
    max = a;
  }
  max = b;
  if (c > max) {
    max = c;
  }

  if ((sum - max) > max) {
    answer = 'YES';
  } else {
    answer = 'NO';
  }

  return answer;
}

console.log(solution(6, 7, 11));