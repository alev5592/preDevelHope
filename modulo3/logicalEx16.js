/*Istanzia le variabili booleane isSunnyDay e isHomeworkCompleted e assegna loro un valore.
Tramite l'operatore ternario stampa in console la stringa Jesse can goes out to play se entrambe le variabili sono true, in caso contrario stampa Jesse stays home*/

let isSunnyDay = true;
let isHomeworkCompleted = true;

let canHaveFun = isSunnyDay && isHomeworkCompleted ? "Jesse can goes out to play" : "Jesse stays home";

console.log(canHaveFun);