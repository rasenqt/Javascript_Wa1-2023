"use strict";

const my_profile={
  name: "Michelangelo",
  lastname: "Caretto",
  scores: [3,4,5,6],
  nickname: "Rasenqt"}

  console.log(my_profile.scores,my_profile['scores'])

 if (my_profile.country) //valore indefinito 
 console.log(my_profile.country)

 my_profile.country && console.log(my_profile.country) 

 const real_country = my_profile.country || "world";  //default value
console.log(real_country)
my_profile.country="Lecce"  //dynamic

 console.log(my_profile);

let keys= Object.keys(my_profile);
console.log(keys)
let k=Object.entries(my_profile);
console.log(k)

//copia
let copy_myprofile=Object.assign({},my_profile)
console.log(copy_myprofile)

//alias
let copia=my_profile 


//update  es {...real-prop,...update-prop}
const your_profile= {...my_profile,country:'nuovo'} 



//valore di default es {...default-prop,...real-prop}
const default_profile= {country:'nuovo',...my_profile} 
console.log(your_profile)