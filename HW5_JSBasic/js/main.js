/////////////////////
/// arguments // arguments.length


const sum = function() {
    
    
    if (arguments.length === 0) {
        return 0
    }
    else {
       return arguments[0] + sum.apply(null, [].slice.call(arguments, 1))
    }
   
}

const res = sum(1, 5, 6, 2)
console.log(res);