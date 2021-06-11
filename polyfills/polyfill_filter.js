Array.prototype.myFilter = function (callback) {
    if (!Array.isArray(this)) {
        throw new Error("The input is not an array")
    }
    if (typeof (callback) !== 'function') {
        throw new Error("Callback should be a function")
    }
    var array = []
    for (var i = 0; i < this.length; i++) {
        if (callback(this[i]))
            array.push(this[i])
    }
    return array
}



console.log([1, 2, 3, 4, 3, 4, 2, 1, 2, 1].myFilter(a => a > 10))