
let magician:string[] = ["harryHodini", "davidBlaine", "dougHenning"];

function makeGreat(magicianArray:string[]) {
    for (let i = 0; i < magicianArray.length; i++) {
        magician[i] = "the great " +   magicianArray[i]    
    }
}
function showMagicians(magicians:string[]) {
    magician.forEach(element => {
        console.log(element);
        
    });
}
makeGreat(magician);
showMagicians(magician)