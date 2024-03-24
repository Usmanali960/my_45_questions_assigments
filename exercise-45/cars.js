"use strict";
function car(manufacture, model, ...extraoption) {
    let carInfo = Object.assign({ manufacture,
        model }, Object.assign({}, ...extraoption));
    return carInfo;
}
let car1 = car("honda", "civic", { color: "black" }, { features: ["navigation", "powerwindow"] });
console.log(car1);
