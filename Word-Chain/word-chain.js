'use strict';

const howMany = document.querySelector('.player');
const promptText = document.querySelector('.prompt');
const form = document.querySelector('form');
const input = document.querySelector('input');


let player;
let word;
let newWord;

const onSubmit = (event) => {
  event.preventDefault();
  console.log(event.target[0].value);

  promptText.textContent = event.target[0].value;
  input.value = '';
}

// const askPlayer = () => {
//   player = Number(window.prompt('몇 명이 참가하나요?'));
//   if (isNaN(player)) {
//     player = Number(window.prompt('입력을 잘못하셨어요..😅\n숫자만 입력해주세요.\n몇 명이 참가하나요?'));
//   }
//   if (player >= 10) {
//     player = Number(window.prompt('선생님.. 10명 넘는건 좀 심했는데...😅\n몇 명이 참가하나요?'));
//   }
//   howMany.textContent = `${player}명 참가하였습니다.`;
// }
// askPlayer();

form.addEventListener('submit', (event) => onSubmit(event));