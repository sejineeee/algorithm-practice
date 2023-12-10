// 조합의 경우수(메모이제이션)
// nCr = n! / (n-r)!r!
// 이 공식을 쓰지 않음
// nCr = n-1Cr-1+n-1Cr 공식을 사용
// 재귀를 이용해 조합수를 구해주는 프로그램 만들기

function getCombination(n, r) {
  const memory = new Map();

  const combination = (n, r) => {
    const key = `${n}:${r}`;

    if (memory.has(key)) {
      return memory.get(key);
    }
    if (n === r || r === 0) {
      return 1;
    } else {
      const value = combination(n - 1, r - 1) + combination(n - 1, r);

      memory.set(key, value);

      return value;
    }
  };

  const ressult = combination(n, r);

  return ressult;
}

console.log(getCombination(33, 19));
