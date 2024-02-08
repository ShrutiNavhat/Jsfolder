let myCar={
    make:"Hyundai",
    model:"i20",
    year:2014,
    disply:function(){
        console.log(this.make+this.model+this.year);
    }
}

//a=(myCar.model)
//a=myCar["model"]
a=myCar.disply();
console.log(a)
