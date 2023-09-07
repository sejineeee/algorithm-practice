// 애너그램(해시)
// 두 문자열이 알파벳의 나열 순서를 다르지만 그 구성이 일치하면 두 단어를 애너그램이라고 함
// 길이가 같은 두 개의 단어가 주어지면 두 단어가 애너그램인지 판별하는 프로그램
// 애너그램 판별시 대소문자가 구분된다.

function checkAnagram(str1, str2) {
  const anagramMap = new Map();
  let result;

  for (const str of str1) {
    if (anagramMap.has(str)) {
      anagramMap.set(str, anagramMap.get(str) + 1);
    } else {
      anagramMap.set(str, 1);
    }
  }

  for (const str of str2) {
    if (!anagramMap.has(str) || anagramMap.get(str) === 0) {
      result = "NO";
      break;
    } else {
      anagramMap.set(str, anagramMap.get(str) - 1);
      result = "YES";
    }
  }

  return result;
}

const string1 = "AbaAeCe";
const string2 = "baeeACA";

console.log(checkAnagram(string1, string2));

const string3 = "abaCC";
const string4 = "Caaab";

console.log(checkAnagram(string3, string4));

module.exports = checkAnagram;
