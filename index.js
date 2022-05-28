
// Write your solution here!
let cats = ["Milo", "Otis","Garfield"];

//destructive push
function destructivelyAppendCat(){

cats.push("Ralph");

return cats; 
}

//destructive unshift
function destructivelyPrependCat(){

cats.unshift("Bob");

return cats;
}

//destructive pop
function destructivelyRemoveLastCat(){

    cats.pop();

    return cats;
}

//destructive shift 
function destructivelyRemoveFirstCat(){

    cats.shift();

    return cats;
}

//undestructive using spread operator 

function appendCat() {

const newCats= [...cats, "Broom"];

return newCats;
}

//undestructive 

function prependCat(){

const newCats = ["Arnold", ...cats];

return newCats; 

}

//undestructive 
function removeLastCat(){
    const copyOfCats = cats.slice(0,2);

    return copyOfCats;
   
}

//undestructive

function removeFirstCat(){

const copyOfCats = cats.slice(1,3);

return copyOfCats;
}