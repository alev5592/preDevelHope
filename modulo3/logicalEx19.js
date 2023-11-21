/*Date le variabili name e surname, crea un costrutto if else per stampare in console la variabile fullname, che conterrà le due variabili precedenti.
La variabile fullname dovrà essere stampata solo se name e surname sono truthy, in caso contrario stampa il messaggio Fullname is invalid */

let name= "franco";
let surname = 'Rossi';

/*let fullName = name + surname ;

if(Boolean(name) == true && Boolean(surname)== true){
    console.log(fullName)
}
else console.log("Fullname is Invalid");

[ MIA VERSIONE ]

*/

if(name && surname){
    let fullname = name + " " + surname;
    console.log(fullname);
} else console.log("Fullname is invalid");