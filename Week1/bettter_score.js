"use strict";

const scores =[3,4,2,9,-2,7,-3,10];
/*
const better =[...scores]

 for(let i=0; i<better.length; i++ )
   {
    if (better[i]<0)
     better.splice(i,1)
   }
   */
  const better =[];
  for(const value of scores )
   {
    if (value>0)
     better.push(value)
   }
  console.log(scores)
  console.log(better)
  const NN = scores.length - better.length
  console.log(NN)
  for(let i=0; i<2; i++ )   //due volte ciclo   
  {
  const minval=Math.min(...better);
  const minpos=better.indexOf(minval);
  better.splice(minpos,1)

  }

  let sum=0;

  for (const value of better )
      sum+=value

   let avg= Math.round(sum/better.length) 
   
   for(let i=0; i<NN+2; i++ )   //5
   {
            better.push(avg)

   }
  console.log(better)


  for (const value of better )
  sum+=value

let newavg= Math.round(sum/better.length) 


console.log(avg)
console.log(newavg)