function car(manufacture:string,model:string,...extraoption: {[key : string]: any } []):object {

    let carInfo = {
        manufacture,
        model,
        ...Object.assign({}, ...extraoption)
    }
    return carInfo;
}
let car1 = car("honda","civic",{color:"black"},{features:["navigation","powerwindow"]});
console.log(car1);
