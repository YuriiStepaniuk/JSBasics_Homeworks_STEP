// let a = +prompt("Enter first number: ");
// let b = +prompt("Enter second number: ");
// if (a >= b) {
//   do {
//     a = +prompt("Enter first number: (Hint: it should be smaller one)");
//   } while (a >= b);
// }

// console.log(a, b);

// const dividers = function (a, b) {
//   let res1 = "",
//     res2 = "";
//   for (let i = a; i <= b; i++) {
//     res1 = `Dividers of ${i} are:`;
//     for (let j = 1; j <= b; j++) {
//       if (i % j === 0) {
//         res2 += ` ${j} `;
//       }
//     }
//     console.log(res1 + res2);
//     res2 = "";
//   }
// };

// console.log(dividers(a, b));

/////////////////////
console.log("1 and 2 are not simple, so no need to start count from them");

const simple = function (num) {
  let res = " ";
  for (let i = 3; i <= num; i++) {
    let isSimple = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isSimple = false;
        break;
      }
    }
    if (isSimple) {
      res += `${i} `;
    }
  }
  return res
};

console.log(`Simple numbers are: ${simple(2000)}`);
