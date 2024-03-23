let userName:string = "Usman ali";

console.log("In upperCase:", userName.toUpperCase());
console.log("In lowerCase:", userName.toLowerCase());
console.log("In titleCase:", userName.replace(/\b\w/g,(char:string) => char.toUpperCase()));
