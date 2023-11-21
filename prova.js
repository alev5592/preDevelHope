function factorialNumber(number1){
    let fact =1;

    if(number1===0){
        return fact;
    }
    else{
        for(let i=1; i<=number1; i++){
            fact= i*fact;
        }
        return fact;
    }
}


console.log(factorialNumber(5));