// 해시 함수를 Map 객체를 이용하여 풀어보기
// Map 객체는 key-value 쌍을 보유하고 key의 삽입 순서를 기억한다.
// 모든 값(객체 및 원시값)을 키 또는 값으로 사용할 수 있음

function getVotingResultWithMap(s) {
  const votingMap = new Map();
  let result;

  for (let i = 0; i < s.length; i++) {
    if (votingMap.has(s[i])) {
      votingMap.set(s[i], votingMap.get(s[i]) + 1);
    } else {
      votingMap.set(s[i], 1);
    }
  }

  let max = Number.MIN_SAFE_INTEGER;
  for (const [key, value] of votingMap) {
    if (max < value) {
      max = value;
      result = key;
    }
  }
  return result;
}

let str = "BACBACCACCBDEDE";

console.log(getVotingResultWithMap(str));
