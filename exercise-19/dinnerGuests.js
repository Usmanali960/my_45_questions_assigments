"use strict";
let dinnerInvite = ["Usman", "Shehroz", "Asim"];
// // idhar hum ne apny dosto ko party par invte kara
// for (let i = 0; i < dinnerInvite.length; i++) {
// const element = dinnerInvite[i];
// console.log(`Dr. ${dinnerInvite[i]}!\nI invite you in my tonight pary.please come in my party.`)
// } 
// // idhar hamara 1 dost party ma na aasaka
let absentGuest = "Shehroz";
let newGuest = "Babar";
// // idhar hum ne apny 1 dusry guest ko bulaliya
// dinnerInvite[1] = newGuest;
// // idhar hum ne unko invitation de
// for (let i = 0; i < dinnerInvite.length; i++) {
//     const element = dinnerInvite[i];
//     console.log(`Dr ${dinnerInvite[i]}!\nI invittonight party. please come.\nThank ypu`)
// }
// console.log(`Dr. ${absentGuest} is not come in our party`)
// // idhar humy 1 bary dinner table mil gay
// console.log("Hey guys we are found the big dinner table for our party tonight so we are invite some more guests in our part");
// // idhar hum ny apny kuch aur dosto ko bulaliya
dinnerInvite.unshift("Mudassir");
dinnerInvite.splice(3, 0, "Shehroz");
dinnerInvite.push("Moiz");
// for (let i = 0; i < dinnerInvite.length; i++) {
//     const element = dinnerInvite[i];
//     console.log(`Dr ${dinnerInvite[i]}!\nI invittonight party. please come.\nThank ypu`)
// }
// // idhar hum ne big dinner table ko cancel krdiya
// console.log("sorry! guys sorry we are not arrange the big dinner table for our party so we are invite our only two friends");
// // idhar hum ny apny kuch dosto ko remove kardiya
while (dinnerInvite.length > 2) {
    let removeGuest = dinnerInvite.pop();
    console.log(`sorry! ${removeGuest} you are not ivited in our tonight party`);
}
// for (let i = 0; i < dinnerInvite.length; i++) {
//     const element = dinnerInvite[i];
//     console.log(`Dr ${dinnerInvite[i]}!\nI invite you in my tonight party. please come.\nThank ypu`)
// }
// // idhar hum ny apny sare dosto ko remove kardiya
dinnerInvite.splice(0, 2);
// console.log(dinnerInvite)
console.log(`we are invite the ${dinnerInvite.length} guests in our party`);
