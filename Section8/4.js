// 부분집합 구하기(DFS)
// 자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력하는 프로그램

function getSubsetNumber(number) {
  const arr = Array.from({ length: number + 1 }, () => 0)
  const result = [];
  
  const recursiveFunc = (recursiveNumber) => {
    if(recursiveNumber === number + 1) {
      let tmp = "";

      for(let i = 1; i <= number; i++) {
        if(arr[i] === 1) {
          tmp += i + " ";
        }
      }

      if(tmp.length === 0) {
        return;
      }

      result.push(tmp.trim());
    } else {
      arr[recursiveNumber] = 1;
      recursiveFunc(recursiveNumber + 1);
      arr[recursiveNumber] = 0;
      recursiveFunc(recursiveNumber + 1); 
    }
  }

  recursiveFunc(1);
  return result;
}

console.log(getSubsetNumber(3));
