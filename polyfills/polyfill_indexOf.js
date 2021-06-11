Array.prototype.myIndexOf=function(value){
    let array=this
    for(var i=0;i<array.length;i++){
        if(value===(this[i])){
            return i
        }

    }

    return -1
}
const data=[12,13,14,15,16,17,18,19,20]
console.log(data.myIndexOf(151))
