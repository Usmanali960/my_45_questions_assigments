"use strict";
let ourUsers = ["Admin", "Usman", "Shehroz", "Asim", "Maaz"];
ourUsers.forEach(elem => {
    if (elem === "Admin" || elem === "Usman") {
        console.log(`Hello ${elem}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${elem}, thank you for login again.`);
    }
});
