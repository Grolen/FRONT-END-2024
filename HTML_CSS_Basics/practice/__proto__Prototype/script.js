const container = document.querySelector('.container');

const func = () => {

}
const number = 2;
const str = "string"
const boolean = true;
const array = [];
const obj = {};

const typesArr = [
  func, 
  number, 
  str,
  boolean,
  array,
  obj
]

const prototypesOftypes = [Function, Number, String, Boolean, Array, Object]

for (let i = 0; i < typesArr.length; i++) {
  const element = typesArr[i];
  const typeOfElem = typeof element; 
  const firstLetter = typeOfElem.slice(0,1);
  const capitalized = typeOfElem.replace(firstLetter,firstLetter.toUpperCase());
  const para = document.createElement('p');
  if (element instanceof Array){
    para.textContent = `[].__proto__ ссылается на объект Array. Получается array.__proto__ === Array.Prototype. Результат я выведу сюда: ${array.__proto__ === Array.prototype}`;
  } else {
    const result = element.__proto__ === prototypesOftypes[i].prototype;
    para.textContent = `${element} __proto__ ссылается на объект ${capitalized}. Получается ${typeOfElem}.__proto__ === ${capitalized}.Prototype. Результат я выведу сюда: ${result}`;
  }
  container.appendChild(para)
}

const paragraphs = document.querySelectorAll('p');
let counter = 0;

for (let i = 0; i < paragraphs.length; i++) {
  const p = paragraphs[i].innerText;
  if (p.indexOf(`false`) === -1) {
    counter++
  }
}

const para = document.createElement('p');
para.style.fontSize = `25px`

if (counter === paragraphs.length) {
  para.style.color = `green`
  para.textContent = `УРА!!! Получилось, везде true!!!`
} else {
  para.style.color = `red`
    para.textContent = `Ну пиздец, где-то false...`
  }

container.appendChild(para)
