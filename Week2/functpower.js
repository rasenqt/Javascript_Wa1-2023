"use strict";

function power (exponent)
{

    const powexp= (base) =>  Math.pow(base,exponent);
    return powexp
}

const square = power(2);
const cube= power(3)

console.log(cube(3))