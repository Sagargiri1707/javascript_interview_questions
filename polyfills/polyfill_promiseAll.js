function asyncFunc(time){

    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(time)
        },time)
    })
}

let list=[asyncFunc(1200),asyncFunc(3600),asyncFunc(2400)]


function  myPromiseAll(tasks){
    let result=[]
    let itemsCompleted=0
    return new Promise((resolve,reject)=>{

        tasks.forEach((element,index )=> {
            element.then(res=>{
                result[index]=res
                itemsCompleted++
                if(itemsCompleted===tasks.length){

                    resolve(result)
                }
            }).catch(error=>{
                reject(error)
            })
    })
    });
}
myPromiseAll(list).then(res=>console.log(res))