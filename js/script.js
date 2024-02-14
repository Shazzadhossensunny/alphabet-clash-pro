function playBtn() {
  const playStart = document.getElementById("play-start");
  const playBoard = document.getElementById("play-board");
  playStart.classList.add("hidden");
  playBoard.classList.remove("hidden");
  continueGame();
}

function continueGame() {
  const alphabetString = "abcdefghigklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  const alphabet = alphabets[index];
  const showAlphabet = document.getElementById("show-alphabet");
  showAlphabet.innerText = alphabet;
  const element = document.getElementById(alphabet);
  element.classList.add("bg-orange-500");
}

document.addEventListener("keyup", function (event) {
  const pressKey = event.key;
  if (pressKey === "Escape") {
    gameOver();
  }
  const showAlphabet = document.getElementById("show-alphabet");
  const showAlphabetInnerText = showAlphabet.innerText.toLowerCase();
  if (pressKey === showAlphabetInnerText) {
    // update score
    const scoreUpdate = document.getElementById("score-update");
    const scoreUpdateInnerText = parseInt(scoreUpdate.innerText);
    const updateScore = scoreUpdateInnerText + 1;
    scoreUpdate.innerText = updateScore;

    // start new round
    const element = document.getElementById(showAlphabetInnerText);
    element.classList.remove("bg-orange-500");
    continueGame();
  } else {
    // life update
    const lifeUpdate = document.getElementById("life-update");
    const lifeUpdateInnerText = parseInt(lifeUpdate.innerText);
    const updateLife = lifeUpdateInnerText - 1;
    lifeUpdate.innerText = updateLife;
    if (updateLife === 0) {
      gameOver();
    }
  }
});

function gameOver() {
  const finalScore = document.getElementById("final-score");
  const playBoard = document.getElementById("play-board");
  finalScore.classList.remove("hidden");
  playBoard.classList.add("hidden");
  // final game update score
  const scoreUpdate = document.getElementById("score-update");
  const scoreUpdateInnerText = parseInt(scoreUpdate.innerText);
  const updateScore = scoreUpdateInnerText + 0;
  const finalGameScore = document.getElementById("final-game-score");
  finalGameScore.innerText = updateScore;
}

function playAgain() {
  const finalScore = document.getElementById("final-score");
  const playBoard = document.getElementById("play-board");
  finalScore.classList.add("hidden");
  playBoard.classList.remove("hidden");
  const scoreUpdate = document.getElementById("score-update");
  scoreUpdate.innerText = 0;
  const lifeUpdate = document.getElementById("life-update");
  lifeUpdate.innerText = 5;
}
