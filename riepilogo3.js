/*
Scrivi una funzione che prende un array di numeri come parametro e restituisce un nuovo array contenente solo i numeri primi dell'array originale.
Stampa il nuovo array.
*/

function onlyPrimal(arr, dim){

    let finalArray = [];
    

    if(dim>0){
        let i=0;
        while(i<dim){

            if(arr[i]<4){
                finalArray.unshift(arr[i]);
            }
            else{
                let trovato = false;
                let j=2
                while(j< arr[i] && !trovato){
                    if(arr[i]%j == 0){
                        trovato = true;
                
                    }
                    else  {
                        finalArray.unshift(arr[i]);
                        console.log(arr[i]+ "/"+ j )
                        trovato=true;
                    }
                    j++;
                }
            }
    
            i++;
        }
    }
    console.log(finalArray);
}

let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];



let x= a.length;



onlyPrimal(a,x);
