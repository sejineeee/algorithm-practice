// 바둑이 승차(DFS)
// 트럭은 Ckg 넘게 태울 수 없음
// C를 넘지 않으면서 바둑이들을 가장 무겁게 태우고 싶음
// N마리의 바둑이와 바둑이의 무게 W가 주어짐
// 태울 수 있는 가장 무거운 무게를 구하는 프로그램

function getMaxWeight(C, list) {
  const arr = Array.from({ length: list.length }, () => 0);
  let result = 0;
  let resultArray = [];
  const recursiveFunc = (index, sum) => {
    if(sum > C) {
      return 0;
    }

    if(index === list.length) {
      if(sum < C) {
        if(result < sum) {
          resultArray = [];
          result = sum;
          for(let i = 0; i < list.length; i++) {
            if(arr[i] === 1) {
              resultArray.push(list[i]);
            }
          }
        }
      }
    } else {
      arr[index] = 1;
      recursiveFunc(index + 1, sum + list[index]);
      arr[index] = 0;
      recursiveFunc(index + 1, sum);
    }
  }

  recursiveFunc(0, 0);

  console.log(resultArray);

  return result;
}

const weightList = [81, 58, 42, 33, 61];

console.log(getMaxWeight(259, weightList));

module.exports = getMaxWeight;
