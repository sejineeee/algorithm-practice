// 재귀함수
// 자연수 N이 입력되면 재귀함수를 이용하여 1부터 N까지를 출력하는 프로그램

function printNumber(number) {
  const recursiveFunc = (recursiveNumber) => {
    if(recursiveNumber === 0) {
      return;
    } else {
      recursiveFunc(recursiveNumber - 1);
      console.log(recursiveNumber);
    }
  }

  recursiveFunc(number);
}

printNumber(3);

// 스택 프레임(stack frame)
// 함수가 호출되면 스택에는 함수의 매개변수, 호출이 끝난 뒤 돌아갈 반환 주소값, 함수에서 선언된 지역 변수 등이 저장됨
// 스택 영역에 차례대로 저장되는 함수의 호출 정보를 스택 프레임이라고 함

// console을 출력하는 위치에 따라서 출력 순서가 다르다.
// 재귀함수 호출 이전에 console을 출력할 경우에는 콘솔을 출력하고 스택에 재귀함수가 쌓임
// 재귀함수 호출 이후에 console을 출력할 경우에는 콘솔을 출력하지 않고 스택에 재귀함수가 쌓이고
// LIFO 순서에 의해 제일 마지막에 호출된 재귀함수가 실행되고 콘솔이 출력되며 스택에서 pop 된다.