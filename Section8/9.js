// 동전교환
// 여러 단위의 동전들이 주어져 있을 때
// 가장 적은 수의 동전으로 거슬러 줄 동전의 최소개수 출력

function getMinCoins(typeOfCoins, changeMoney) {
  let result = Number.MAX_SAFE_INTEGER;
  let resultArr = [];

  const recursiveFunc = (level, sum, arr) => {
    if(sum > changeMoney) {
      return;
    }
    if(sum === changeMoney) {
      result = Math.min(result, arr.length);
      resultArr = [...arr];
    } else {
      for(let i = 0; i < typeOfCoins.length; i++) {
        recursiveFunc(level + 1, sum + typeOfCoins[i], [...arr, typeOfCoins[i]]);
      }
    }
  }

  recursiveFunc(0, 0, []);

  console.log(resultArr);
  return result;
}

const coins = [1, 2, 5];

console.log(getMinCoins(coins, 15));
