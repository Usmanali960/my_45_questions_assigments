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
    console.log(`Dr ${dinnerInvite[i]}!\nI invittonight party. please come.\nThank ypu`)
}
console.log(`Dr. ${absentGuest} is not come in our party`)


console.log("Hey guys we are found the big dinner table for our party tonight so we are invite some more guests in our part");

dinnerInvite.unshift("Mudassir");
dinnerInvite.splice(3,0,"Shehroz")
dinnerInvite.push("Moiz")

for (let i = 0; i < dinnerInvite.length; i++) {
    const element = dinnerInvite[i];
    console.log(`Dr ${dinnerInvite[i]}!\nI invittonight party. please come.\nThank ypu`)
}

