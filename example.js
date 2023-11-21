let n = 50;
let trovato = false;
let i=2;
if(n>3){
    while(i<n && !trovato ){
        if(n%i == 0){
            console.log("non è primo");
            trovato = true;
        }
        i++;
    }
}
if (trovato == false){
    console.log("è un numero primo!");
}

