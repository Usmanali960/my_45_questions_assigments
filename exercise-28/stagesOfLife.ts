let personAge:number = 18;

if (personAge < 2) {
    console.log("You are a babay");
}else if(personAge > 2 && personAge < 4 ){
    console.log("You are a toodler"); 
}else if(personAge > 4 && personAge < 13){
    console.log("You are a kid");   
}else if(personAge > 13 && personAge < 20){
    console.log("You are a teenager"); 
}else if(personAge > 20 && personAge < 60){
    console.log("You are a adult");
}else {
    console.log("You are a elder");
    
}