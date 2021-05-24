'use strict';

const howMany = document.querySelector('.player');
const promptText = document.querySelector('.prompt');
const form = document.querySelector('form');
const input = document.querySelector('input');


let player;
let word;
let newWord;
let pastWord = [];
let FAILCOUNT = 0;

const onSubmit = (event) => {
  event.preventDefault();
  newWord = event.target[0].value;
  const isWord = pastWord.find(element => element.word === newWord);
  // 단어가 있니? 응=>true / 아니=>false
  if (!isWord) {
    pastWord.push({word: newWord});
    promptText.textContent = newWord;
    input.value = '';
    FAILCOUNT = 0;
  } else if (isWord) {
    if (FAILCOUNT > 1) {
      alert('당신이 졌습니다 😜');
      FAILCOUNT = 0;
    } else {
      alert('이미 입력한 단어입니다😜');
      FAILCOUNT++;
    }
  } else {
    console.log('error');
  }
}

const askPlayer = () => {
  player = Number(window.prompt('몇 명이 참가하나요?'));
  if (isNaN(player)) {
    return player = Number(window.prompt('입력을 잘못하셨어요..😅\n숫자만 입력해주세요.\n몇 명이 참가하나요?'));
  }
  if (player >= 10) {
    return player = Number(window.prompt('선생님.. 10명 넘는건 좀 심했는데...😅\n몇 명이 참가하나요?'));
  }
  howMany.textContent = `${player}명 참가하였습니다.`;
}

askPlayer();


form.addEventListener('submit', (event) => onSubmit(event));