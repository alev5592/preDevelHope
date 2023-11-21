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

for(let i=0;i<students.length;i++){
    console.log(students[i]);
}