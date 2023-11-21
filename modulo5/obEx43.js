/*Il nostro oggetto student è incompleto. Abbiamo bisogno di aggiungere a questo oggetto, un ulteriore oggetto al suo interno di nome personalData. 
L'oggetto nested personalData deve contenere le seguenti proprietà: name, surname, age. Sapresti inserirlo?
*/
const student = {
    id: 1,
    school: "Liceo",
    year: 3,
    personalData: {
        name : "Giovanni",
        surname : "Messina",
        age: 18,

    }
};

console.log(student);

