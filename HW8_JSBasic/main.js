// Task 1

const arr = [2, -5, -9, 2, -4, 5, 34, -11, 2, 3, -4, 5, -6, 9];

// Sum of negative numbers in array
const negative = arr.reduce((start, next) => {
    if (next < 0 ) {
        return start + next
    } else {
        return start 
    }
}, 0)

// Multiplication of elements between min and max
const mul = function (arr) {
    const min  = arr.reduce((minValue, currentValue) => {
        return Math.min(minValue, currentValue)
    }, 0)
    const max  = arr.reduce((maxValue, currentValue) => {
        return Math.min(maxValue, currentValue)
    }, 0)
    const newArr = arr.splice(min, max)
}

console.log(negative);
