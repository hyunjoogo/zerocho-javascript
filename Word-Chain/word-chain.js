'use strict';

import searchDict from "./dict.js";

const howMany = document.querySelector('.player');
const promptText = document.querySelector('.prompt');
const form = document.querySelector('form');
const input = document.querySelector('input');
const nowPlayer = document.querySelector('.nowPlayer');
const dict = document.querySelector('.dict');


let ALLPLAYER;
let COUNTPLAYER = 0;
let FIRSTWORD = ["연구소", "아버지", "어머니", "자동차", "슭곰발", "발냄새",]
let NEWWORD;
let LASTWORD = "제시어";
let PASTWORD = [];
let FAILCOUNT = 0;

// 입력한 단어는 newWord
// 지난 단어는 PASTWORD
const checkWord = (event) => {
  event.preventDefault();
  NEWWORD = event.target[0].value;
  searchDict(NEWWORD);
  // const lastWordLast = LASTWORD.charAt(LASTWORD.length - 1);
  // const newWordFirst = NEWWORD.charAt(0);
  // if (lastWordLast === newWordFirst) {
  //   onSubmit();
  // } else {
  //   alert('잘못 입력했습니다! 제시어와 입력한 단어를 확인해주세요.😅');
  //   checkFail();
  // }
}

const onSubmit = () => {
  const isWord = PASTWORD.find(element => element.word === NEWWORD);
  // 단어가 있니? 응=>true / 아니=>false
  if (!isWord) {
    PASTWORD.push({word: NEWWORD});
    LASTWORD = NEWWORD;
    promptText.textContent = NEWWORD;
    input.value = '';
    FAILCOUNT = 0;
    checkPlayer();
  } else if (isWord) {
    alert('이미 입력한 단어입니다😜');
    checkFail()
  } else {
    console.log('error');
  }
}

const checkFail = () => {
  if (FAILCOUNT >= 2) {
    alert(`사용자${COUNTPLAYER}이 졌습니다. 새로운 게임을 시작합니다.`)
    LASTWORD = "제시어";
    PASTWORD = [];
    FAILCOUNT = 0;
    RandomWord();
    askPlayer();
  } else {
    input.focus();
    FAILCOUNT++;
  }
}

const RandomWord = () => {
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }
  LASTWORD = FIRSTWORD[getRandomInt(FIRSTWORD.length)];
  promptText.textContent = LASTWORD;
  nowPlayer.textContent = 1;
  COUNTPLAYER = 1;
}

const checkPlayer = () => {
  if (ALLPLAYER === COUNTPLAYER) {
    COUNTPLAYER = 1;
    nowPlayer.textContent = `${COUNTPLAYER}`;
    console.log(COUNTPLAYER);
  } else {
    COUNTPLAYER++;
    nowPlayer.textContent = `${COUNTPLAYER}`;
    console.log(COUNTPLAYER);
  }
}

//  10 이상 숫자를 누르면 한번은 경고메세지가 나오지만
// 두번째에서는 그냥 넘어가버림

const askPlayer = () => {
  let AskPlayer = Number(window.prompt('몇 명이 참가하나요?'));
  if (isNaN(AskPlayer)) {
    return Number(window.prompt('입력을 잘못하셨어요..😅\n숫자만 입력해주세요.\n몇 명이 참가하나요?'));
  }
  if (AskPlayer >= 10) {
    return Number(window.prompt('선생님.. 10명 넘는건 좀 심했는데...😅\n몇 명이 참가하나요?'));
  }
  ALLPLAYER = AskPlayer;
  howMany.textContent = `${ALLPLAYER}명 참가하였습니다.`;
  RandomWord();
}

// askPlayer();
form.addEventListener('submit', (event) => checkWord(event));