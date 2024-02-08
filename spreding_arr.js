//const a=[1,2,3,4,5]
//const d=[4,6,7,8,9]
//console.log(...a,...d)

const parts = ["shoulders", "knees"];
const lyrics = ["head", ...parts, "and", "toes"]; 
console.log(lyrics)
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3,6];
console.log(sum(...numbers));
