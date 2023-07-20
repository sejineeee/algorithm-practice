// 문자와 숫자가 섞여있는 문자열이 주어지면
// 그 중 숫자만 추출하여 그 순서대로 자연수를 만듭니다.
// 만약 "tge0a1h205er"에서 숫자만 추출하면 0, 1, 2, 0, 5
// 이것을 자연수를 만들면 1205
// 추출하여 만들어지는 자연수는 100,000,000을 넘지 않습니다.
// 첫 줄에 숫자가 섞인 문자열이 주어지고, 문자열의 길이는 50을 넘지 않음.
// 첫 줄에 자연수를 출력

const mixedStr = "g0en2T0s8eSoft";

function getNaturalNum(str) {
  const regexp = /[0-9]/g;
  const extractNum = str.match(regexp).join("");
  const convertNaturalNum = parseInt(extractNum);

  console.log(convertNaturalNum);
}

getNaturalNum(mixedStr);
