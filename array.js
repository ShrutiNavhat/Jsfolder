let modules=["shruti",12,12.5]
let modules2= new Array("shruti",12,12.5);
modules2 . push("unix")
//modules[1]=3
//console.log(modules)
//console.log(modules2)
//console.log(typeof(modules))
//console.log(modules2.pop())



//const arr=[2,4,6,8,10];
modules.forEach (function (el){
     console.log(el+" ");
});
function forEach(f){
    for (el of this){
        f(el);
    }
}
