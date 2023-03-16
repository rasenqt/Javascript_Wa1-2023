"use strict";

let c=2;
let b=x(c);


console.log(b)

function x(y){
    y=10;
    return y*10;
}
let funct = (x) => { 
    return x*x ; }

 let n = funct(4) ;

console.log(n)

//nested function

function hyperyopthenus(x,n){   //questo funziona
const power=(z) =>  z*n ;

return power(x)
}
//funzione interna prima di esterna     da problemi perche exp sparisce e power è scoeprta
function hyperyopthenus(x,n){
    const exp =n*7;
    const power=(z) =>  z*exp ;
    
    return power
    }


    cacca