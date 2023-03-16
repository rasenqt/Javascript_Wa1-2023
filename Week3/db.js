"use strict";
const sqlite=require('sqlite3');

const db=new sqlite.Database('questions.sqlite',(err)=>  {if(err)   throw err;  } );
 //parmaeter =? e poi metto nei parmatri (sql,[parmametri]) 
function authorsofQuestionNUmber(qestNo)
{  
    return newPromise((resolve,reject)=> {
    const sql= 'SELECT author FROM ANSWER WHERE questionId= ?'; 
db.all(sql,[qestNo], (err,rows)=>{  
    if (err)   throw err
         else{ 
         const  authorList=rows.map((x)=>x['author']);
        resolve(authorList);
         }
           });
        })
    }
const myAuthors= authorsofQuestionNUmber(1);
myAuthors.then((list)=> {console.log(list)});

