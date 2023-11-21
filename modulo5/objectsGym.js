let oggetto = {

    "key" : "stringa",
    "number" : 8,
    "func": (arg) => arg+2

}

oggetto["braccio"] = "arto"

console.log(oggetto["key"]);
console.log(oggetto["number"]);
console.log(Object.keys(oggetto));
console.log(oggetto.func(10));

if("numbers" in oggetto){
    console.log(oggetto.number +1 );
}else{
    console.log("non esiste alcun oggetto di nome 'number' ")
}
oggetto.func(5);
for(const variable in oggetto){
    console.log(typeof(oggetto[variable]));
}