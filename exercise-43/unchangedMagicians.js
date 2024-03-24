"use strict";
let magician = ["harryHodini", "davidBlaine", "dougHenning"];
function copyArray(arr) {
    return [...arr];
}
function makeGreat(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = "the great " + magicianArray[i];
    }
}
function showMagicians(magicians) {
    magician.forEach(element => {
        console.log(element);
    });
}
let copyMagician = copyArray(magician);
makeGreat(copyMagician);
console.log("this is my original array");
showMagicians(magician);
console.log("\n \n this is my modified copy of the array");
showMagicians(copyMagician);
