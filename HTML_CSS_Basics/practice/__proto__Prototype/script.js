//Did querySelector for container
const container = document.querySelector('.container');

//Created all types

const func = () => {

}
const number = 2;
const str = "string"
const boolean = true;
const array = [];
const obj = {};

//Put all in array for checking

const typesArr = [
  func, 
  number, 
  str,
  boolean,
  array,
  obj
]

//Created list of Objects..??

const prototypesOftypes = [Function, Number, String, Boolean, Array, Object]

let counter = 0;

// "for" loop for creating results in DOM
// * refactor code, make it easier to read, simplify

// ! HAVE AN IDEA HOW TO MAKE IT BETTER WITH instanceof

for (let i = 0; i < typesArr.length; i++) {
  const element = typesArr[i];
  const typeOfElem = typeof element; 
  const firstLetter = typeOfElem.slice(0,1);
  const capitalized = typeOfElem.replace(firstLetter,firstLetter.toUpperCase());
  const para = document.createElement('p');
  const result = element.__proto__ === prototypesOftypes[i].prototype;
    para.textContent = `${element} __proto__ ссылается на объект ${capitalized}. Получается ${typeOfElem}.__proto__ === ${capitalized}.Prototype. Результат я выведу сюда: ${result}`;
  if (element instanceof Array){
    para.textContent = `[].__proto__ ссылается на объект Array. Получается array.__proto__ === Array.Prototype. Результат я выведу сюда: ${element.__proto__ === Array.prototype}`;
  }
  container.appendChild(para)
  //changed this line from finding false to finding true because instead of false the result might be "undefined" or "null".
  if (para.textContent.indexOf(`true`) !== -1) {
    counter++
  }
}


const doubleCheckingPara = document.createElement('p');
doubleCheckingPara.style.fontSize = `25px`

if (counter === typesArr.length) {
  doubleCheckingPara.style.color = `green`
  doubleCheckingPara.textContent = `УРА!!! Получилось, везде true!!!`
} else {
  doubleCheckingPara.style.color = `red`
    doubleCheckingPara.textContent = `Ну пиздец, где-то false...`
  }

container.appendChild(doubleCheckingPara)
