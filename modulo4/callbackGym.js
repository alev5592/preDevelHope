    // il timeout , cioè il ritardo nell'utilizzo di una funzione, viene utilizzato quando si sta interagendo con un'api.
    // così se non sappiamo il tempo di risposta di essa, la funzione setTimeout(function()) ritarda l'utilizzo della funzione in argomento

    // -------------------------------------------------------------------------------------

    // il callback invece serve a richiamare una funzione """""ricorsivamente"""""



function first(callback){

    setTimeout(function(){
        console.log("primo");
        callback();
    },500);
}

function second(){
    console.log("secondo");
}

first(second);