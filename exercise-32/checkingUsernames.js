"use strict";
let currentUsers = ["John", "Alice", "bob", "charlie", "emma"];
let newUsers = ["John", "mike", "sarh", "charlie", "dave"];
for (let newUser of newUsers) {
    let isTaken = false;
    for (let currentUser of currentUsers) {
        if (newUser.toLowerCase() === currentUser.toLowerCase()) {
            isTaken = true;
            break;
        }
    }
    if (isTaken) {
        console.log(`sorry the userName ${newUser} is already taken`);
    }
    else {
        console.log(`congratulations! the userName ${newUser} is available`);
    }
}
