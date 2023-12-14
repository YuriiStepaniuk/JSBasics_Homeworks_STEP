const answers = [
  'Лелека',
  'Криниця',
  'Чайник',
  'Дід Мороз',
  'Вогонь',
  'Морозиво',
  'Зошит',
  'Вікно',
  'Часник',
  'Свічка',
];

btnA = document.querySelectorAll('button');
hideA = document.querySelector('hide');
const countAnswers = document.querySelector('span');
answerA = document.querySelector('.text');

let count = 0;

btnA.forEach((btn, i) => {
  btn.addEventListener('click', function () {
    let bgA = document.querySelector('.text' + (i + 1));
    let hideRow = document.querySelector('.hide' + (i + 1));
    let inp = document.querySelector('.ans' + (i + 1));
    let answer = inp.value.toLowerCase().replace(/\s/, '');

    if (answer === answers[i].toLowerCase().replace(/\s/, '')) {
      hideRow.textContent = '👌😊👌';
      count += 1;
      countAnswers.textContent = `${count}`;
      bgA.style.backgroundColor = 'green';
      bgA.style.color = 'white';
    } else {
      hideRow.textContent = '😢🤬😥';
      bgA.style.backgroundColor = 'red';
      bgA.style.color = 'white';
    }

    inp.value = '';
  });
});
