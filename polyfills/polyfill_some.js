Array.prototype.mySome=function(callback,initialVal){
    let array=this
    for(var i=0;i<array.length;i++){
        if(callback(this[i])){
            return true
        }

    }

    return false
}

console.log([12,2,3,4,1,1,1].mySome(a=>a>=111))
