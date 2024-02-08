

//let squar= x => x*x;
//r=squar(20)
//console.log(r)


//let sum=(...args) => {
    //let s=0;
       //args.forEach(element =>{
         // s=s+element;
          
     //});
     //return s;
//}
//r=sum(10,20,30)
//console.log(r)

//function a(...add){
        //let sum=0;
        //for(let i of add){
           // sum+=i;
        //}
       // return sum;
//}
//console.log(a(1,2));
//console.log(a(1,2,3));
//console.log(a(1,2,3,4,5)); 

  
function a(x,y,...add){
        let sum=0;
        for(let i of add){
            sum+=i+x,y;
        }
        return sum;
}
console.log(a(1,2));
console.log(a(1,2,3));
console.log(a(1,2,3,4,5));

  
  
