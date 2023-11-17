// Least Recently Used(카카오 캐시 문제 변형)
// 캐시에서 작업을 제거할 때 가장 오랫동안 사용하지 않은 것을 제거하는 알고리즘
// 캐시 사이즈 5, 작업이 2,3,1,6,7 순으로 저장되어 있다면
// (맨 앞이 가장 최근에 쓰인 작업이고, 맨 뒤는 가장 오랫동안 쓰이지 않은 작업임)
// Cache Miss : 해야할 작업이 캐시에 없는 상태로 만약 새로운 작업을 CPU가 사용한다면
// 모든 작업이 뒤로 밀리고 새로운 작업이 캐시의 맨 앞에 위치함.
// Cache Hit : 해야할 작업이 캐시에 있는 상태로 만약 3번 작업을 CPU가 사용한다면
// 뒤로 한 칸씩 밀리고 3번 작업이 맨 앞으로 위치함.
// 캐시의 크기 S(3<=S<=10), 작업의 개수 N(5<=N<=1,000)

function sortLRU(size, listOfWork) {
  const cache = Array(size);

  listOfWork.forEach((item) => {
    let index = cache.indexOf(item);
    
    if(index === -1) {
      for(let i = size - 1; i >= 1; i--) {
        cache[i] = cache[i - 1];
      }
    } else {
      for(let i = index; i >= 1; i--) {
        cache[i] = cache[i - 1];
      }
    }
    cache[0] = item
  })

  return cache;
}

const list = [1, 2, 3, 2, 6, 2, 3, 5, 7];

console.log(sortLRU(5, list))