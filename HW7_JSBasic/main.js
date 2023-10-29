// Task 1

// const inp = prompt('Enter numbers, separated with comma: ')
// const arr = inp.split(',').map(Number)

// console.log(arr);
// const m = function () {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++ ){
//         if (arr[i] >= 0) {
//             newArr.push(arr[i])
//         }
//     }
//     console.log(newArr);
// }

// console.log(m(arr));

// Task 2

// const arr = [1, 22, 1, -48, 321, 0];

// const minMaxFunction = function (arr) {
//   let min = arr[0];
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) min = arr[i];
//     if (arr[i] > max) max = arr[i];
//   }

//   return [min, max];
// };
// console.log(minMaxFunction(arr));

// Task 3

// const arr = [1, 2, 3, 3, 2, 1, 45, 45, 32, 23, 12, 15];

// const delDublicates = function (arr) {
//   // Initializing empty output array
//   let noDublicates = [];

//   // Sorting given array
//   const newArr = arr.slice().sort((a, b) => a - b);
//   console.log(newArr);

//   //Logic of adding only unique elements
//   for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i] !== newArr[i + 1] ) noDublicates.push(newArr[i]);
//     console.log(newArr[i], newArr[i+1]);
//   }
//   return noDublicates;
// };

// console.log(delDublicates(arr));

// Task 4

// const a = ['asd', 'a', 'vdf', 1, null, undefined]
// const b = [1, 5, [{name: 'Yurii'}]]

// const merge = function(a, b) {
//     return a.concat(b)
// }

// console.log(merge(a, b));