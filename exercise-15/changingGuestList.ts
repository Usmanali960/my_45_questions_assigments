let dinnerInvite:string[] = ["Usman","Shehroz","Asim"];

for (let i = 0; i < dinnerInvite.length; i++) {
const element = dinnerInvite[i];
console.log(`Dr. ${dinnerInvite[i]}!\nI invite you in my tonight pary.please come in my party.`)
} 

let absentGuest:string = "Shehroz";
let newGuest:string = "Babar";

dinnerInvite[1] = newGuest;

for (let i = 0; i < dinnerInvite.length; i++) {
    const element = dinnerInvite[i];
    console.log(`Dr ${dinnerInvite[i]}!\nI invite you in my tonight party. please come.\nThank ypu`)
}
console.log(`Dr. ${absentGuest} is not come in our party`)