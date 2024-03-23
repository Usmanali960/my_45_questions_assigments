let numbers:number[] = [1,2,3,4,5,6,7,8,9];
let ordinal:string = "";

for (let num of numbers) {
    if (num === 1) {
        ordinal = "st";
    }else if(num === 2){
        ordinal = "nd";
    }else if(num === 3){
        ordinal = "rd"
    }else{
        ordinal = "th"
    }
    console.log(`${num}${ordinal}`);
    
}