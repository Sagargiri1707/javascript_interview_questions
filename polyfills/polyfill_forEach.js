Array.prototype.myForEach = function (callback) {
    if (!Array.isArray(this)) {
        throw new Error("The input is not an array")
    }
    if (typeof (callback) !== 'function') {
        throw new Error("Callback should be a function")
    }
    for (var i = 0; i < this.length; i++) {

        callback(this[i])
    }

}



[1, 2, 3, 4, 3, 4, 2, 1, 2, 1].myForEach(a => console.log(a + "3"))