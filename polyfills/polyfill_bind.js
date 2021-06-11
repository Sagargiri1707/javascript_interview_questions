Function.prototype.myBind=function(...args){
    let obj=this
    let params=args.slice(1)
    return function(...objects){
        obj.apply(args[0],[...params,...objects])
    }

}

function print(...args){
    console.log(this.name,...args)
}

let myBindFunction=print.myBind({name:"Sagar Giri"},"\n NIT Puducherry")
myBindFunction("\n Works in Thinkify labs")