/*Scrivere un funzione di nome Smartphone che prenda come parametro i seguenti elementi: brand,name, price.
 Questa funzione, ogni volta che viene chiamata con new, deve restituire un nuovo oggetto smartphone, con le informazioni (parametri) che passiamo
*/

function Smartphone(brand, name, price){
    
    if(typeof brand === "string"){
        this.brand = brand;
    }else this.brand= String(brand);

    if(typeof name === "string"){
        this.name = name
    }else this.name = String(name);

    if(typeof price === "number"){
        this.price = price
    }else this.price = Number(price);

}

let nokia = new Smartphone("Nokia","Flip",450);
let samsung = new Smartphone("Samsung","Galaxy s10","sasda");

console.log(nokia);
console.log(samsung);