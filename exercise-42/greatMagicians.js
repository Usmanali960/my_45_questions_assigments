"use strict";
let magician = ["harryHodini", "davidBlaine", "dougHenning"];
function makeGreat(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magician[i] = "the great " + magicianArray[i];
    }
}
function showMagicians(magicians) {
    magician.forEach(element => {
        console.log(element);
    });
}
makeGreat(magician);
showMagicians(magician);
