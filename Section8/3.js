// 이진트리 순회(깊이 우선 탐색)
// 이진트리를 전위순회와 후위순회를 연습해보기
// 부모 노드 * 2 => 왼쪽 자식
// 부모 노드 * 2 + 1 => 오른쪽 자식

// 전위순회는 부모 → 왼쪽 자식 → 오른쪽 자식
// 중위순회는 왼쪽 자식 → 부모 → 오른쪽 자식
// 후위순회는 왼쪽 자식 → 오른쪽 자식 → 부모

function binaryTree(node) {
  const recursiveFunc = (node) => {
    if(node > 7) {
      return;
    } else {
      console.log(node);
      recursiveFunc(node * 2);
      recursiveFunc(node * 2 + 1);
    }
  }

  recursiveFunc(node);
}

console.log(binaryTree(1));

// console을 출력하는 위치에 따라서 전위순회, 중위순회, 후위순회로 달라진다.
// console을 재귀함수 호출 맨 위에서 출력하면 전위순회
// console을 재귀함수 호출 왼쪽(node * 2) 아래에서 출력하면 중위순회
// console을 재귀함수 호출 왼쪽(node * 2), 오른쪽(node * 2 + 1) 아래에서 출력하면 후위순회
