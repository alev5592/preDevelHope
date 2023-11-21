// Modifica il costrutto if creato nell'esercizio 20, trasformandolo in un costrutto switch



let valor = "cviaos";


switch(typeof valor){
    case "number":
        console.log("this is a number");
        break;
    
    case "string":
        console.log("this is a string");
        break;
    
    case "boolean":
        console.log("this is a boolean");
        break;
        
    default:
        console.log("Error");
}
