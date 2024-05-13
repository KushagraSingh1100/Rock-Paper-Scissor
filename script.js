let userScore = 0;
let computerScore = 0;

let choices = document.querySelectorAll(".choice");
let text = document.querySelector(".text");
let plscore = document.querySelector("#plscore");
let comscore = document.querySelector("#comscore");
let newbutton = document.querySelector(".butt");

const computerGenerate = () => {
  let options = ["Rock", "Paper", "Scissor"];
  let computerChoice = Math.floor(Math.random() * 3);
  return options[computerChoice];
};

newbutton.addEventListener("click", () => {
  location.reload();
});

const playGame = (userChoice) => {
  const compChoice = computerGenerate();
  if (userChoice === compChoice) {
    drawGame(compChoice);
    console.log("tie");
  } else if (userChoice === "Paper" && compChoice === "Scissor") {
    looseGame(compChoice);
    console.log("loose");
  } else if (userChoice === "Paper" && compChoice === "Rock") {
    winGame(compChoice);
    console.log("win");
  } else if (userChoice === "Rock" && compChoice === "Scissor") {
    winGame(compChoice);
    console.log("win");
  } else if (userChoice === "Rock" && compChoice === "Paper") {
    looseGame(compChoice);
    console.log("loose");
  } else if (userChoice === "Scissor" && compChoice === "Paper") {
    winGame(compChoice);
    console.log("win");
  } else if (userChoice === "Scissor" && compChoice === "Rock") {
    looseGame(compChoice);
    console.log("loose");
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});

const winGame = (compChoice) => {
  console.log("win");
  text.style.backgroundColor = "green";
  text.innerText = "You Won. Computer chose: " + compChoice;
  userScore += 1;
  plscore.innerText = "Player: " + userScore;
};

const looseGame = (compChoice) => {
  console.log("win");
  text.style.backgroundColor = "red";
  text.innerText = "You Lost. Computer chose: " + compChoice;
  computerScore += 1;
  comscore.innerText = "Computer: " + computerScore;
};

const drawGame = (compChoice) => {
  console.log("win");
  text.style.backgroundColor = "rgb(18, 172, 215)";
  text.innerText = "It was a tie. Computer also chose: " + compChoice;
};
