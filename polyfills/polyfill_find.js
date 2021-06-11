Array.prototype.myFind=function(callback){
    let array=this
    for(var i=0;i<array.length;i++){
        if(callback(this[i])){
            return this[i]
        }

    }

    return false
}
const data=[{company:"Walmart",id:12},{company:"Microsoft",id:13}]
console.log(data.myFind(a=>a.id==1))
