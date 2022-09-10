// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 'A'를 모두 '#'으로 바꿈
// 입력 : 첫 번째 줄에 문자열
// 출력 : 첫 번째 줄에 바뀐 단어 출력

// 예를 들면 BANANA는 출력되면 B#N#N#

function solution(s) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "A") {
      answer += "#";
    } else {
      answer += str[i];
    }
  }
  return answer;
}

let str = "BANANA";
console.log(solution(str));

function regExpSolution(str) {
  let answer = str;
  answer = answer.replace(/A/g, "#");
  return answer;
}

let otherStr = "AIRPLANE";
console.log(regExpSolution(otherStr));

function otherSolution(str) {
  let strToArr = str.split("");
  let answer = "";
  strToArr.forEach((str) => {
    if (str === "A") {
      answer += "#";
    } else {
      answer += str;
    }
  });
  return answer;
}

console.log(otherSolution(otherStr));

// replace는 정규표현식, 교체문자열
// string.replace(regexp|substr, newSubstr)
