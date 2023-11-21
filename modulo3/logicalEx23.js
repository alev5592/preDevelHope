/*Crea, tramite costrutto switch, un controllo che stampi in console il prezzo di una camera d'albergo in base alle seguenti tariffe:
Tariffa BB --> 50€
Tariffa HB --> 80€
Tariffa FB --> 100€*/

let choice = "gianni";

switch(choice){
    case "BB" :
        console.log("50€");
        break;
    case "HB" :
        console.log("80€");
        break;
    case "FB" :
        console.log("100€");
        break;
    default :
        console.log("Please insert a valid option : BB, HB, FB");
}