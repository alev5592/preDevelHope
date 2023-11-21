// stesso esercizio del 39 , ma al posto del for usiamo un method apposito: Object.assign({}, oggetto)

let user = {
    name: "Cosimo",
    age: 30,
    };
    
    
let newUser = Object.assign({ }, user);// per creare una copia di un oggetto , conviene usare questo method, in modo tale da permettere la modifica di ognuno, senza alterare i valori dell'altro
    
newUser.name = "Paolo";
    
console.log(newUser);
console.log(user);