// 모든 애너그램 찾기(해시, 투포인터, 슬라이딩 윈도우)
// S문자열에서 T문자열과 애너그램이 되는 S의 부분문자열의 개수를 구하는 프로그램
// 애너그램 판별시 대소문자 구분된다
// 부분문자열은 연속된 문자열이어야 된다

function isEqual(m1, m2) {
  if (m1.size !== m2.size) {
    return false;
  } else {
    for (const [key, value] of m1) {
      if (!m2.has(key) || m2.get(key) !== value) {
        return false;
      }
    }
    return true;
  }
}

function checkAllAnagram(str1, str2) {
  const sStrMap = new Map();
  const tStrMap = new Map();

  let result = [];

  let len = str2.length - 1;

  for (let i = 0; i < str2.length; i++) {
    if (tStrMap.has(str2[i])) {
      tStrMap.set(str2[i], tStrMap.get(str2[i]) + 1);
    } else {
      tStrMap.set(str2[i], 1);
    }
  }

  let point1 = 0;

  for (let i = 0; i < len; i++) {
    if (sStrMap.has(str1[i])) {
      sStrMap.set(str1[i], sStrMap.get(str1[i]) + 1);
    } else {
      sStrMap.set(str1[i], 1);
    }
  }

  for (let point2 = len; point2 < str1.length; point2++) {
    if (sStrMap.has(str1[point2])) {
      sStrMap.set(str1[point2], sStrMap.get(str1[point2]) + 1);
    } else {
      sStrMap.set(str1[point2], 1);
    }

    if (isEqual(sStrMap, tStrMap)) {
      result.push([...sStrMap.keys()]);
    }

    sStrMap.set(str1[point1], sStrMap.get(str1[point1]) - 1);

    if (sStrMap.get(str1[point1]) === 0) {
      sStrMap.delete(str1[point1]);
    }
    point1++;
  }

  console.log("부분문자열은", result);

  return result.length;
}

const string1 = "bacaAacba";
const string2 = "abc";

console.log(checkAllAnagram(string1, string2));

module.exports = checkAllAnagram;
