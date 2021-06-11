Array.prototype.myEvery=function(callback,initialVal){
    let array=this
    for(var i=0;i<array.length;i++){
        if(!callback(this[i])){
            return false
        }

    }

    return true
}

console.log([12,2,3,4,1,1,1].myEvery(a=>a>=1))
