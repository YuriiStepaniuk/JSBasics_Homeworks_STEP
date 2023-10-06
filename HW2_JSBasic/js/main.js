///// Task 1

// const age = +prompt('Enter your age: ')
// if (age >= 0 && age <= 2) {
//     console.log('You are a baby')
// }
// else if (age > 2 && age < 12) {
//     console.log('You are a child');
// }
// else if (age >= 12 && age < 18) {
//     console.log('You are a teenager');
// }
// else if (age >= 18 && age < 60) {
//     console.log('You are an adult');
// }
// else if (age < 0) {
//     console.log('Woa, you have to be some cheater !');
// }
// else {
//     console.log('You are pensioner');
// }

///// Task 2

// const num = +prompt('Enter number from 0-9: ')
// if (num === 1) {
//     console.log('!');
// }
// else if (num === 2){
//     console.log('@');
// }
// else if (num === 3){
//     console.log('#');
// }
// else if (num === 4){
//     console.log('$');
// }
// else if (num === 5){
//     console.log('%');
// }
// else if (num === 6){
//     console.log('^');
// }
// else if (num === 7){
//     console.log('&');
// }
// else if (num === 8){
//     console.log('*');
// }
// else if (num === 9){
//     console.log('(');
// }
// else if (num === 0){
//     console.log(')');
// }
// else {
//     console.log('Not valid input');
// }

///// Task 3

// const price = +prompt('Enter price amount of shopping: ')
// if (price < 200) {
//     console.log('Try to get more goods for yourself ^_^');
// }
// else if (price >= 200 && price < 300) {
//     console.log(`You have to pay ${price - (price * 0.03)} with discount`);
// }
// else if (price >= 300 && price < 500) {
//     console.log(`You have to pay ${price - (price * 0.05)} with discount`);
// }
// else {
//     console.log(`You have to pay ${price - (price * 0.07)} with discount`);
// }

///// Task 4

// const year = +prompt('Enter a year to check if it`s leap or not: ')
// if ((year % 400) === 0 || ((year % 4) === 0 && (year % 100) != 0)) {
//     console.log('Leap year');
// }
// else {
//     console.log('Not leap year');
// }

///// Task 5

// const day = +prompt("Enter a day (number): ");
// const month = +prompt("Enter a month (number): ");
// const year = +prompt("Enter a year: ");

// if (day <= 0 || day > 31) {
//   console.log("Not valid day !");
// } else if (month <= 0 || month > 12) {
//   console.log("Not valid month !");
// } else if (year <= 0 || year > 2023) {
//   console.log("Not valid year !");
// } else if (
//   (month === 4 || month === 6 || month === 9 || month === 11) &&
//   day === 30
// ) {
//   console.log(`Next day is: 01.${month + 1}.${year}`);
// } else if (
//   month === 2 &&
//   day === 29 &&
//   ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0)
// ) {
//   console.log(`Next day is: 01.${month + 1}.${year} (leap year)`);
// } else if (month === 2 && day === 28 && (year % 4 != 0 || year % 400 != 0)) {
//   console.log(`Next day is: 01.${month + 1}.${year} (not leap year)`);
// } else if (month === 2 && day > 28 && (year % 4 != 0 || year % 400 != 0)) {
//   console.log("Not valid day (Ferbruary has only 28 days, year is not leap");
// } else if (
//   (month === 1 ||
//     month === 3 ||
//     month === 5 ||
//     month === 7 ||
//     month === 8 ||
//     month === 10) &&
//   day === 31
// ) {
//   console.log(`Next day is: 01.${month + 1}.${year}`);
// } else if (month == 12 && day === 31) {
//   console.log(`01.01.${year + 1}`);
// } else {
//   console.log(`Next day is: ${day + 1}.${month}.${year}`);
// }
