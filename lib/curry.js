// 闭包应用柯里化

var curry = function(func) {
    var slice = Array.prototype.slice,
        args = slice.apply(arguments, [1]);

    return function() {
        return func.apply(null, args.concat(slice.apply(arguments)));
    }
}

var add = function(a, b) {
    return a + b;
}