let condition1 = true;
let condition2 = true;

// let value = condition1 ? (condition2 ? '둘 다 참' : '1만 참') : '1이 거짓';

// console.log(value);


let cond = false;
let SwithValue = '';
if (cond) {
  SwithValue = "참";
} else {
  SwithValue = "거짓";
}

switch (cond) {
  case true :
    SwithValue = "참";
    break;
  case false :
    SwithValue = "거짓";
    break;
  default:
    console.log('error');
}

console.log(SwithValue);

// 반복문 while : 조건문이 true 인 동안 실행문이 순차적으로 반복이 된다.
// while (조건문) {
//   실행문1;
//   실행문2;
// }

const forExample = () => {
  let i = 1;
  while (i <= 10) {
    i++;
  }
}


// 반복문 for : 시작 => 조건식 => 동작문 => 종료식 순으로 반복이 된다.
// for ( 시작; 조건식; 종료식) {
//   동작문;
// }


for (let i = 0; i <= 10; i++) {
  console.log('hello for');
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i = i + 2) {
  console.log(i);
}
console.log('break와 continue');

// break와 continue : break 만나는 순간 멈춘다.

const breakExample = () => {
  let i = 0;
  while (true) {
    if (i === 5) break;
    i++;
  }
  console.log(i);
}

breakExample();

// continue 는 넘어가라

const continueExample = () => {
  let i = 0;
  while (i < 10) { // 홀수만 console.log}
    console.log(`초기 : ${i}`);
    i++;
    if (i % 2 === 0) {
      continue;
    }
    console.log(`답 : ${i}`);
  }
}
continueExample();

const twoFor = () => {
  let array = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      array.push({i, j});
    }
  }
  console.log(array);
}

twoFor();
// 구구단 짝수는 빼고
const nineNineDan = () => {
  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) continue;
    for (let j = 0; j < 10; j++) {
      if (j % 2 === 0) continue;
      console.log(i, j, i * j);
    }
  }
}

nineNineDan();

// 별찍기
const star = () => {
  // 12345 star
  for (let i = 0; i < 5; i++) {
    console.log('*'.repeat(i + 1));
  }
  // reverse star
  for (let j = 5; j > 0; j--) {
    console.log('*'.repeat(j + 1));
  }
  // reverse star
  for (let j = 0; j < 5; j++) {
    console.log('*'.repeat(5 - j));
  }
  // 13579 star
  for (let k = 1; k < 10; k = k + 2) {
    console.log('*'.repeat(k));
  }
  // reverse
  for (let k = 1; k < 10; k = k + 2) {
    console.log('*'.repeat(10 - k));
  }
  for (let i = 0; i < 5; i++) {
    console.log(`${' '.repeat(i)}${'*'.repeat(5 - i)}`);
  }
  for (let i = 0; i < 5; i++) {
    console.log(`${' '.repeat(i)}${'*'.repeat(5 - i)}`);
  }
  console.log(428871 + 427918 + 399663 + 426445 + 412016 + 425008 + 410620 + 423561 + 422856 + 408531 + 421396 + 407113);
  console.log(124590 + 128743 + 124590 + 128743 + 159658 + 150409 + 161775 + 156557 + 161775 + 151338 + 167704 + 167763);
  for (let t = 1; t <= 5; t++) {
    console.log(`${' '.repeat(5 - t)}${'*'.repeat(t*2-1)}${' '.repeat(5 - t)}`)
    // 4 1 4 1
    // 3 3 3 2
    // 2 5 2 3
    // 1 7 1 4
    // 0 9 0 5
  }
}

star();