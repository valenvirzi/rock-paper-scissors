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

function makeChoicePC() {
  let choice = Math.random();
  if (choice < 0.33) {
    choice = "Rock";
  } else if (choice > 0.66) {
    choice = "Paper";
  } else {
    choice = "Scissors";
  }
  return choice;
}
