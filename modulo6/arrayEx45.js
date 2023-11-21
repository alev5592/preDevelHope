/*Abbiamo bisogno di scrivere un array di nome students, questo array conterrà tre oggetti con le seguenti informazioni:

id
name
surname
age 
Dobbiamo scrivere queste informazioni per tre studenti diversi. Dopo averlo fatto, vogliamo stampare le info solamente del primo studente

*/

function Person(id, name, surname, age){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.age =age;
}

let cora = new Person(1,"Cora", "Jade", 18);
let alexa = new Person(2,"Alexa", "Bliss",22);
let liv = new Person(3, "Liv", "Morgan",20);

const students = [cora, alexa, liv];

console.log(students[0]);




