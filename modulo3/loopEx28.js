/*Usa un ciclo for per stampare in console tutti i numeri da 0 a 10 e poi la loro somma.
Il risultato dovrà essere:

0
1
2
3
4
5
6
7
8
9
10
55*/

let i;
let sum=0;
for(i=0; i<=10; i++){
    console.log(i);
    sum = i+sum;
}
console.log(sum);