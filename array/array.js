const findLast = ['a', 'b', 'c', 'd', 'e'];
console.log(findLast.length);
findLast[findLast.length] = 'f';
console.log(findLast[findLast.length - 1]);

// 배열 값 추가하기
const pushFirst = () => {
  // 배열 맨 앞에 추가
  findLast.unshift('0');
  // 배열 맨 뒤에 추가
  findLast.push('end');
  console.log(findLast);
}

pushFirst();

// const에는 새로운 값을 대입하지 못한다.
// 하지만 const에 객체가 대입된 경우 객체 내부의 속성이나 배열의 요소는 수정할 수 있다.
// findLast = ['a', 'b']; <= ❌
findLast[0] = 'change';
console.log(findLast);


