var add = function(x,y){
    this.result = x+y;
}

var obj={};

//add.apply(obj,[3,4]);
//add.call(obj,3,4);
add=add.bind(obj)
add(3,4);

console.log(obj);