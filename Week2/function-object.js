"use strict";
const response={ text:"aaaaba" , score: 5 }
function createResponse(text,score)
{
   const obj= { text:text, score:score}
   obj.increaseScore= () => {obj.score=obj.score+1} //create function of object


   return obj
}
const r1= createResponse( "abc",5)
const r2=createResponse("abc",4)
console.log(r1)
r1.increaseScore();
console.log(r1)

//versone + facile "Constructor Function "
function Response(text,score)
{
   this.text=text;
   this.score=score;
   this.incresescore= () =>{this.score++;}  ;   //this obbligatorio 

}
const r3= new Response('sss',1); //create a new Object  
r3.incresescore();
console.log(r3)


console.log("----------SORTING OBJECT ")
const responses =[r1,r2,r3];
console.log(responses.sort(   (a,b)=> a.score-b.score    ) )
