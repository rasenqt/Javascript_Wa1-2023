"use strict";
const dayjs= require('dayjs');
dayjs().format('LL');
function film(id,title,favorite=false,date,value)
{
   this.id=id;
   this.title=title;
   this.favorite=favorite;
   this.date=date;
   this.value= value;
}
function library()
{
  this.films=[];
   this.addfilm=(film) =>{ this.films.push(film)} ;
   this.print=() =>{this.films.forEach(x=>console.log(x))};
   this.sortByDate=()=>{const tmp=[...this.films]
                       const no_date=tmp.filter((x=>x.date==undefined));
                        const date=tmp.filter(((x=>x.date!=undefined)));
                        date.sort( (a, b) => { dayjs(a.date).isBefore(dayjs(b.date));});
                      no_date.forEach(x=>date.push(x));
                      return date; };
   this.deleteFilm=(id_delete)=>{ this.films.splice(id_delete-1,1)};
   this.resetWatchedFilms=()=>{this.films.forEach( x => x.date=undefined)};
   this.getRated=()=>{const tmp=[...this.films];
    tmp.filter( x => x.value>0).sort((a,b)=> {return -a.value+b.value }).forEach(x=>console.log(x));
                                 };

}



let id_film=0;

const l1=new library();
l1.addfilm(new film(++id_film,"Pulp Fiction",true,"March 10,2023",5));
l1.addfilm(new film(++id_film,"21 Grams",true, "March 17 ,2023",4));
l1.addfilm(new film(++id_film,"Star Wars",false));
l1.addfilm(new film(++id_film,"Matrix",false));
l1.addfilm(new film(++id_film,"Shrek",false, "March 21 ,2023",3));



   l1.getRated();

debugger;