/* Scriviamo il nostro primo array. Scrivi un array di nome numbers dove avremo una collezione di numeri da 1 a 10. Di seguito dovremo:

Stampare il primo valore
Stampare l'ultimo valore
Stampare la lunghezza dell'array
Indicare il risultato se proviamo a stampare il 20esimo valore ed il perché*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


console.log(numbers[0]);
console.log(numbers[numbers.length-1]);
console.log(numbers.length);
console.log(numbers[20]); //otterremo undefined poiché stiamo cercando di accedere a una posizione dell'array che non esiste

