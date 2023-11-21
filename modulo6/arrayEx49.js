// Abbiamo il nostro array di studenti, vogliamo rimuovere lo studente Giovanni ed aggiungere il seguente studente:

const students = [
    { id: 1, name: "Luca", surname: "Rossi", age: 20 },
    { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
    { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];

// lista iniziale studenti

console.log(students);

//cancello il profilo di Giovanni

students.pop();
console.log(students);

//aggiungo il profilo di Francesco

students.push({ id: 3, name: "Francesco", surname: "Verdi", age: 41 });
console.log(students);
