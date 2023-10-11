const coun = [
  {
    ukraine: {
      cap: "Київ",
      lang: "Українська",
      law: "Парламентсько-президентська",
      independance: "24 серпня 1991",
      area: "603 628 км^2",
    },
  },
  {
    germany: {
      cap: "Берлін",
      lang: "Німецька",
      law: "федеративна парламентська республіка",
      independance: "ФРН з 23 травня 1949",
      area: "357 578 км^2",
    },
  },
  {
    france: {
      cap: "Париж",
      lang: "Паризька",
      law: "Президентсько-парламентська республіка",
      independance: "22 вересня 1792 ",
      area: "671 308 км^2",
    },
  },
  {
    austria: {
      cap: "Відень",
      lang: "Австрійська німецька",
      law: "Федеративна парламентська республіка",
      independance: "27 липня 1955",
      area: "83 871 км^2",
    },
  },
  {
    bulgary: {
      cap: "Софія",
      lang: "Болгарська",
      law: "унітарна парламентська республіка",
      independance: "5 жовтня 1908",
      area: "110 993 км^2",
    },
  },
];

let headerCountry = document.querySelector(".headerCountry");
let capital = document.querySelector(".capital");
let language = document.querySelector(".language");
let law = document.querySelector(".law");
let indep = document.querySelector(".indep");
let area = document.querySelector(".area");

let a;
const countriess = [
  "Ukraine",
  "ukraine",
  "Germany",
  "germany",
  "France",
  "france",
  "Austria",
  "austria",
  "Bulgary",
  "bulgary",
];

do {
  a = prompt("Choose country: \nUkraine\nGermany\nFrance\nAustria\nBulgary");
} while (countriess.includes(a) === false);

function changeText(name) {
  let countryCheck = name.toLowerCase();
  const countryData = coun.find(
    (country) => Object.keys(country)[0] === countryCheck
  );

  const {
    cap: capitalValue,
    lang: languageValue,
    law: lawValue,
    independance: independenceValue,
    area: areaValue,
  } = countryData[countryCheck];

  capital.textContent = capitalValue;
  language.textContent = languageValue;
  law.textContent = lawValue;
  indep.textContent = independenceValue;
  area.textContent = areaValue;
}

switch (a) {
  case countriess[0]:
  case countriess[1]:
    headerCountry.textContent = `Україна`;
    changeText(a);
    break;
  case countriess[2]:
  case countriess[3]:
    headerCountry.textContent = `Німеччина`;
    changeText(a);
    break;
  case countriess[4]:
  case countriess[5]:
    headerCountry.textContent = `Франція`;
    changeText(a);
    break;
  case countriess[6]:
  case countriess[7]:
    headerCountry.textContent = `Австрія`;
    changeText(a);
    break;
  case countriess[8]:
  case countriess[9]:
    headerCountry.textContent = `Болгарія`;
    changeText(a);
    break;
  default:
    break;
}
