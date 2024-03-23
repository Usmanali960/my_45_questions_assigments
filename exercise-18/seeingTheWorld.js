"use strict";
let placesToVisit = ["Tokyo", "paris", "newYork", "machuPichu", "sydney"];
// print original order
console.log("original order:", placesToVisit);
// print alphabetical order without modifying the original list
console.log("Alphabetical order:", [...placesToVisit].sort());
// print original order again
console.log("original order:", placesToVisit);
// print reverse alphabetical order without modifying the original list
console.log("reverseAlphabeticalOrder", [...placesToVisit].sort().reverse());
// print original order again
console.log("original order:", placesToVisit);
// reverse the order of the list 
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
// reverse the order of the list again to return to original order
placesToVisit.reverse();
console.log("original order:", placesToVisit);
// sort the array in alphabetical order 
// (changes original array)
placesToVisit.sort();
console.log("Sorted alphabetically:", placesToVisit);
// sort the array in reverse alphabetical order (changes original array)
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);
