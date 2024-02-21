let scoreInitial = 0;
let lifeInitial = 5;
const audio = new Audio();
let isGamaPlayOn = false;
const artBoard = document.getElementById('art-board');
function playBtn() {
  const playStart = document.getElementById("play-start");
  const playBoard = document.getElementById("play-board");
  playStart.classList.add("hidden");
  playBoard.classList.remove("hidden");
  isGamaPlayOn = true;
  continueGame();
}

function continueGame() {
  // random letter generate with random number
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  const alphabet = alphabets[index];
  // show display in random alphabet
  const showDisplay = document.getElementById("show-alphabet");
  showDisplay.innerText = alphabet;
  const element = document.getElementById(alphabet);
  element.classList.add("bg-yellow-400");
}

document.addEventListener("keyup", function (event) {
  if(isGamaPlayOn == false)return;
  const pressKey = event.key;
  if (pressKey === "Escape") {
    gameOver();

  }
  const showDisplay = document.getElementById("show-alphabet");
  const showAlphabetInnerText = showDisplay.innerText.toLowerCase();

  console.log(artBoard);

  if (showAlphabetInnerText === pressKey) {
    const scoreUpdate = document.getElementById("score-update");
    audio.src = ('../audio/success.mp3');
    audio.play();
    scoreInitial = scoreInitial + 1;
    scoreUpdate.innerText = scoreInitial;
    const scoreFinalUpdate = document.getElementById("final-game-score");
    scoreFinalUpdate.innerText = scoreInitial;
    const element = document.getElementById(showAlphabetInnerText);
    element.classList.remove("bg-yellow-400");
    continueGame();
  } else {
    const lifeUpdate = document.getElementById("life-update");
    audio.src = ('../audio/wrong.mp3');
    audio.play();
    lifeInitial = lifeInitial - 1;
    lifeUpdate.innerText = lifeInitial;
    const percentageLifeInitial = (lifeInitial / 5) * 100;
    artBoard.style.background = `linear-gradient(#ffffffB3 ${percentageLifeInitial}% , red)`;
    if (lifeInitial === 0) {
      gameOver();
    }
  }
});

function gameOver() {
  const finalScore = document.getElementById("final-score");
  const playBoard = document.getElementById("play-board");
  finalScore.classList.remove("hidden");
  playBoard.classList.add("hidden");
  const scoreUpdate = document.getElementById("score-update");
  const lifeUpdate = document.getElementById("life-update");
  scoreUpdate.innerText = 0;
  lifeUpdate.innerText = 5;
  scoreInitial = 0;
  lifeInitial = 5;
  isGamaPlayOn = false;
  artBoard.style.background = '#ffffffB3';

}

function playAgain() {
  isGamaPlayOn = true;
  const finalScore = document.getElementById("final-score");
  const playBoard = document.getElementById("play-board");
  finalScore.classList.add("hidden");
  playBoard.classList.remove("hidden");


}
// modal function
const model = document.getElementById('model');
function modelOpen(e){
  if(e.clientY < 15){
    model.style.display = 'flex'
  }

}
document.body.onmousemove = modelOpen;

document.getElementById('modelClose').addEventListener('click', function(){
  model.style.display = 'none'
})