"use strict";

const strings= ["Luigi De Russis","Luca Mannella", "Fulvio Corno", "Juan Pablo Saenz Moreno", "Enrico Masala", "Antonio Servetti", "Eros Fani"];

console.log(strings)
let nameArray=strings.map( x => { return x.split(' ')[0].trim();  } )
let acronimousArray=strings.map( x => {  let tmp= x.split(/ +/) 
                                           let acronymous= ' '
                                        for (let i=0; i<tmp.length; i++ )
                                           acronymous+= tmp[i][0].toUpperCase();
                                            return acronymous.trim() } )
                 
console.log(nameArray) 
console.log(acronimousArray)
let final=[] 
for (let i=0; i<nameArray.length; i++ )
    final.push(acronimousArray[i]+"-"+nameArray[i])

    console.log(final.sort())