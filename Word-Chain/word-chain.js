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
  // 뭘하고 싶은거지?
  // 1. 저 함수에서 리턴되는 값(단어의 뜻)을 화면에 보여주고 싶어
  // 그래서 let으로 지정하려고 했더니 let definition = searchDict(NEWWORD);
  // undefined가 나옴
  // 리턴값이 잘못되었거나 사용방법이 잘못됨
  dict.textContent = NEWWORD;

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

askPlayer();
form.addEventListener('submit', (event) => checkWord(event));

/*
rule : 3 OUT (3번 틀리면) 지는 방식 , 한번 성공하면 아웃카운터는 리셋됨
1. 참가자수 묻기
2. 제시어는 랜덤
  - 제시어는 내가 직접 몇개 선정
3. 입력한 값 확인 (틀릴 때마다 1OUT)
  순서대로 확인하기
  3.1 제시어의 끝말과 같은지 (끝말잇기잖아...)
  3.2 기존에 입력한 단어인지 (한번했던건 안되게)
  3.3 뜻이 없는 단어인지 (정의가 없다면 아웃)
4. 승자 표시
 */