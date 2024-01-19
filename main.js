// Rock, Paper, Scissors
// El Jugador debe elegir entre 3 opciones, que cuando decide provoca una "decición" del mismo tipo por parte de la Computadora
// Debe mostrarse la elección de cada uno en pantalla
// Cada opción a elegir puede tener diferentes resultados dependiendo de la elección del oponente:
// Piedra > Tijera; Tijera > Papel; Papel > Piedra;
// Además cada opción es igual a sí misma, por lo que:
// Piedra = Piedra; Tijera = Tijera; Papel = Papel;
// En base a las elecciones hechas por ambos participantes, debe mostrarse un texto que indique el resultado de la ronda para el Jugador
// En caso de haber un ganador, se le sumará un punto a su contador
// Habrá también una tabla que muestre las últimas 5 elecciones hechas por el contrincante
// Además existirá un botón que al oprimirlo reiniciará la partida actual, es decir: Puntajes, Elecciones actuales (de cada participante), Texto con resultado de la Ronda & Tabla de Últimas elecciones tomadas por el contrincante

const containerLatestChoices = document.getElementById(
  "containerLatestChoices"
);
const currentPickPC = document.getElementById("currentPickPC");
const currentPickUser = document.getElementById("currentPickUser");
const scoreUser = document.getElementById("scoreUser");
const scorePC = document.getElementById("scorePC");
const roundOutcome = document.getElementById("roundOutcome");
const btnRock = document.getElementById("btnRock");
const btnPaper = document.getElementById("btnPaper");
const btnScissors = document.getElementById("btnScissors");
const btnRestart = document.getElementById("btnRestart");
let userScore = 0;
let PCScore = 0;

function storeLatestChoices() {}

function displayPick(choice, element) {
  switch (choice) {
    case "Rock":
      element.setAttribute("src", "img/rock.png");
      break;
    case "Paper":
      element.setAttribute("src", "img/paper.png");
      break;
    case "Scissors":
      element.setAttribute("src", "img/scissors.png");
      break;
    default:
      element.setAttribute(
        "src",
        "https://www.svgrepo.com/show/458579/cancel.svg"
      );
  }
}

function makeChoiceUser(e) {
  let choiceUser;
  switch (e.target.id) {
    case "Rock":
      choiceUser = "Rock";
      break;
    case "Paper":
      choiceUser = "Paper";
      break;
    case "Scissors":
      choiceUser = "Scissors";
      break;
    default:
      choiceUser = "";
  }
  return choiceUser;
}

function makeChoicePC() {
  let choicePC = Math.random();
  if (choicePC < 0.33) {
    choicePC = "Rock";
  } else if (choicePC > 0.66) {
    choicePC = "Paper";
  } else {
    choicePC = "Scissors";
  }
  return choicePC;
}

function getOutcome(choiceUser, choicePC) {
  if (choiceUser == choicePC) {
    roundOutcome.textContent = "It's a draw :|";
    roundOutcome.classList.remove("won", "lost");
    roundOutcome.classList.add("draw");
  } else if (
    (choiceUser == "Rock" && choicePC == "Paper") ||
    (choiceUser == "Paper" && choicePC == "Scissors") ||
    (choiceUser == "Scissors" && choicePC == "Rock")
  ) {
    roundOutcome.textContent = "You lose :(";
    roundOutcome.classList.remove("won", "draw");
    roundOutcome.classList.add("lost");
    ++PCScore;
    scorePC.textContent = PCScore;
  } else if (
    (choicePC == "Rock" && choiceUser == "Paper") ||
    (choicePC == "Paper" && choiceUser == "Scissors") ||
    (choicePC == "Scissors" && choiceUser == "Rock")
  ) {
    roundOutcome.textContent = "You win :)";
    roundOutcome.classList.remove("draw", "lost");
    roundOutcome.classList.add("won");
    ++userScore;
    scoreUser.textContent = userScore;
  }
}

function restartGame() {
  displayPick(undefined, currentPickPC);
  displayPick(undefined, currentPickUser);
  userScore = 0;
  PCScore = 0;
  scoreUser.textContent = userScore;
  scorePC.textContent = PCScore;
}

btnRock.addEventListener("pointerdown", (e) => {
  let userChoice = makeChoiceUser(e);
  let PCChoice = makeChoicePC();
  displayPick(PCChoice, currentPickPC);
  displayPick(userChoice, currentPickUser);
  getOutcome(userChoice, PCChoice);
});
btnPaper.addEventListener("pointerdown", (e) => {
  let userChoice = makeChoiceUser(e);
  let PCChoice = makeChoicePC();
  displayPick(PCChoice, currentPickPC);
  displayPick(userChoice, currentPickUser);
  getOutcome(userChoice, PCChoice);
});
btnScissors.addEventListener("pointerdown", (e) => {
  let userChoice = makeChoiceUser(e);
  let PCChoice = makeChoicePC();
  displayPick(PCChoice, currentPickPC);
  displayPick(userChoice, currentPickUser);
  getOutcome(userChoice, PCChoice);
});
btnRestart.addEventListener("pointerdown", (e) => {
  restartGame();
});
document.addEventListener("DOMContentLoaded", (e) => {
  restartGame();
});
