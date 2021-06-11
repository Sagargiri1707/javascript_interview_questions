Array.prototype.myReduce=function(callback,initialVal){
    let array=this
    for(var i=0;i<array.length;i++){
        initialVal=callback(initialVal!==undefined?initialVal:array[i],array[i])
    }
    return initialVal
}

console.log([12,2,3,4,1,1,1].myReduce((a,b)=>a+b,0))
