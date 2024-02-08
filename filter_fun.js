//let numbers=[10,5,20,17,14]
//let even_numbers=numbers.filter(x=>x%2==0)
//console.log(even_numbers)


let numbers=[10,5,20,17,14]
let even_num=numbers.filter(function(x){
      if( x%2==0){
          return x;
      }
})
console.log(even_num)
