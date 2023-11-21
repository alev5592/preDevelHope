/*Crea una variabile primitive e assegnale un valore che potrà essere di tipo numero, stringa o booleano.
Crea un controllo per verificare il tipo della variabile e stamparlo in console.*/


let primitive = true;

if(typeof primitive == "number"){
    console.log("This valor is a number");
} else if(typeof primitive == "string"){
    console.log("This valor is a string")
    } else if( typeof primitive == "boolean"){
        console.log("this valor is a boolean");
    }   