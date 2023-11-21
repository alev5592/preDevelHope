let str1= "5";
let str2= "4";

console.log(Number(str1)+ Number(str2)); // richiamo la funzione Number()che converte la stringa in ubn tipo.

// per alcune operazioni, ad esempio la divisione, non è necessario convertire il tipo. Perché le stringhe non supportano la divisione.

let trueValue = true;

console.log(Number(trueValue));
console.log(String(trueValue)); // in questo caso la conversione del tipo procede in stringa
console.log(Boolean(1)); // in questo caso un Booleano 1 sta per true, 0 sta per false