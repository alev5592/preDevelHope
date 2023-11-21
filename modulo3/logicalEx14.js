// Inserisci i corretti operatori logici per ottenere il risultato richiesto

const question1 = 101 < 67; //f
const question2 = 1 == true; //t
const question3 = true != 1 //f
const question4 = 4 <= 4 //t


console.log(question1 || question2) //the result must be true
console.log(question1 && question2) //the result must be false
console.log(question3 || question2) //the result must be true
console.log(question4 != question4) //the result must be false
console.log(question2 != question4) //the result must be false