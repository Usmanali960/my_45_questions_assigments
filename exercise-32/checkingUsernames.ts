let currentUsers:string[] = ["John","Alice","bob","charlie","emma"];
let newUsers:string[] = ["John","mike","sarh","charlie","dave"];

for (let newUser of newUsers) {
    let isTaken:boolean = false;
    for (let currentUser of currentUsers) {
        if (newUser.toLowerCase() === currentUser.toLowerCase()) {
            isTaken = true;
            break;
        }
    }
    if (isTaken) {
        console.log(`sorry the userName ${newUser} is already taken`);
    }else{
        console.log(`congratulations! the userName ${newUser} is available`);  
    }
}
