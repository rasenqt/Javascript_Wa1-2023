"use strict";

const dayjs= require('dayjs');
let now= dayjs()
console.log(now.format())
function Answer (text,autore,score,date)
{
this.text=text;
this.autore=autore;
this.score=score;
this.date=dayjs(date);


}
function Question(text,autore,date)
{
this.text=text;
this.autore=autore;
this.date=dayjs(date);
this.answer=[];
this.add=(x) =>{this.answer.push(x)};
this.findbyname=(name)=> {return this.answer.filter(x=> x.autore==name)};
this.afterdate= (afterdate)=> {return this.answer.filter(x=> x.date.isAfter(dayjs(afterdate)))};
this.listByScore = () => {
    const answersCopy = [...this.answer] ;
    answersCopy.sort((a,b)=>b.score-a.score)
    return answersCopy ;
}
}


const q1=new Question("what","fulvio","2023-23-23");
q1.add(new Answer("bla","asdas",2,"2023-23-23"));
q1.add(new Answer("bla","asdas",3,"2020-23-23"));
q1.add(new Answer("bla","asdas",5,"2025-23-23"));

console.log(q1.listByScore());            
debugger;