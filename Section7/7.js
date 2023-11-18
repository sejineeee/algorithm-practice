// 좌표 정렬
// N개의 평면상의 좌표(x, y)가 주어지면 모든 좌표를 오름차순으로 정렬
// 정렬 기준은 먼저 x값에 의해서 정렬, x값이 같을 경우 y값에 의해 정렬

function sortCoordinates(arr) {
  const list = [...arr];
  for(let i = 0; i < list.length - 1; i++) {
    if(list[i][0] > list[i + 1][0]) {
      [list[i], list[i + 1]] = [list[i + 1], list[i]];
    }  
  }

  for(let i = 0; i < list.length - 1; i++) {
    if(list[i][0] === list[i + 1][0]) {
      if(list[i][1] > list[i + 1][1]) {
        [list[i], list[i + 1]] = [list[i + 1], list[i]];
      } 
    }
  }
  
  return list;
}

const coordinates = [[2, 7], [1, 3], [1, 2], [2, 5], [3, 6]];

console.log(sortCoordinates(coordinates));