"use strict";
function makeSandwich(item) {
    console.log("making your sandwich with:");
    item.forEach(element => console.log("- ", element));
    console.log("\nenjoy your andwich!\n");
}
makeSandwich(["Ham", "cheese", "lettuce"]);
makeSandwich(["turkey", "bacon"]);
makeSandwich(["peanut butter", "jelly"]);
