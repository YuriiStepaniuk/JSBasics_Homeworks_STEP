//////////
let input1 = document.querySelector(".inp1");
let input2 = document.querySelector(".inp2");
let resDiv = document.querySelector('.resDiv')
const btn = document.querySelector(".btn");

function tax(x, y = 0.18) {
    let res
if(y < 1) {
  res = x * y;
  resDiv.textContent = `${res}`
}
else if (y >= 1 && y < 100) {
    y /= 100;
    res =  x * y
    resDiv.textContent = `${res}`
}
else if (x <= 0) {
    resDiv.textContent = 'Either u never work or made a mistake';
}
  else {
    resDiv.textContent = 'Invalid data'
  }
}

btn.addEventListener("click", function () {
  let x  =  input1.value
  let y = input2.value
  
  tax(x, y);
});

//////////////

let evenOdd = document.querySelector('.even-odd')
let resDiv1 = document.querySelector('.resDiv1')
let btnEven = document.querySelector('.btn-even')

function isEven (number) {
    
    if (number % 2 === 0) { 
        resDiv1.textContent  = `${number} is  Even`
    }
    else {
        resDiv1.textContent = `${number} is Odd`
    }
}

btnEven.addEventListener('click', function () {
    let number = evenOdd.value
    isEven(number)
})

////////////

let num1 = document.querySelector('.num1')
let num2 = document.querySelector('.num2')
let divSign = document.querySelector('.sign')
let btnSign = document.querySelector('.btn-sign')

function check(a, b) {
    if (a > b) {
        divSign.textContent = ' > '
    }
    else if (a < b) {
        divSign.textContent = ' < '
    }
    else {
        divSign.textContent = ' = '
    }
}

btnSign.addEventListener('click', function () {
    a = num1.value
    b = num2.value
    check(a, b)
})


////////////

let rol = document.querySelector('.roleEnter')
let btnROle = document.querySelector('.btn-role')
let admin = document.querySelector('.admin')
let user = document.querySelector('.user')
let guest = document.querySelector('.guest')


function checkRole(str) {
    if (str === 'admin') {
        admin.style.opacity = 1;
        user.style.opacity = 0;
        guest.style.opacity = 0;
    }
    else if (str === 'user') {
        user.style.opacity = 1;
        admin.style.opacity = 0;
        guest.style.opacity = 0;
    }
    else if (str === 'guest') {
        guest.style.opacity = 1;
        admin.style.opacity = 0;
        user.style.opacity = 0;
    }
    else {
        alert('Wrong input ! Try again choosing from\nadmin\nuser\nguest')
    }
}

btnROle.addEventListener('click', function () {
    let rolVal = rol.value
    checkRole(rolVal)
})