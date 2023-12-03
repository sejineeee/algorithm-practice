// 합이 같은 부분집합(DFS: 아마존 인터뷰)
// N개의 원소로 구성된 자연수 집합
// 이 집합을 두 개의 부분집합으로 나누었을 때
// 두 부분집합의 원소의 합이 서로 같은 경우 "YES" 출력
// 합이 서로 같지 않은 경우 "NO" 출력
// 둘로 나뉘는 두 부분집합은 서로소 집합
// 두 부분집합을 합하면 입력으로 주어진 원래의 집합

function getEqualSumSubsetNumber(list) {
  const totalSum = list.reduce((a, b) => a + b);
  const arr = Array.from({ length: list.length }, () => 0);
  const subsetList = [[], []];
  let result = "";
  let flag = 0;
  
  const getSubset = (index, sum) => {
    if(flag === 1) {
      return;
    }

    if(index === list.length) {
      if(totalSum - sum === sum) {
        result = "YES";
        flag = 1;

        for(let i = 0; i < list.length; i++) {
          if(arr[i] === 1) {
            subsetList[0].push(list[i]);            
          } else {
            subsetList[1].push(list[i]);
          }
        }
      } else {
        result = "NO";
      }
    } else {
      arr[index] = 1;
      getSubset(index + 1, sum + list[index]);
      arr[index] = 0;
      getSubset(index + 1, sum);
    }
  }

  getSubset(0, 0);

  console.log(subsetList);
  return result;
}

const list = [1, 3, 5, 6, 7, 10];

console.log(getEqualSumSubsetNumber(list))

module.exports = getEqualSumSubsetNumber;