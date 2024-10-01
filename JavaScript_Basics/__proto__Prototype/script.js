//Did querySelector for container
const container = document.querySelector('.container');

//Created all types

const func = () => {

}
const number = new Number(2);
const str = new String("string")
const boolean = new Boolean(true);
const array = new Array([]);
const obj = new Object({});

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

const prototypesOfTypes = [Function, Number, String, Boolean, Array, Object]

let counter = 0;

// "for" loop for creating results in DOM
// * refactor code, make it easier to read, simplify

// ! HAVE AN IDEA HOW TO MAKE IT BETTER WITH instanceof

//05.03.24 - refactored code, made better functionality

for (let i = 0; i < typesArr.length; i++) {
  const element = typesArr[i];
   const para = document.createElement('p');
  for (let j = 0; j < prototypesOfTypes.length; j++) {
    const type = prototypesOfTypes[j];
    if(element instanceof type) {
      const typeToSting = type.toString().split(" ")[1]
      const removedBrackets = typeToSting.slice(0, typeToSting.length-2)
      const lowerCaseName = removedBrackets.toLocaleLowerCase()
      const result = element.__proto__ === type.prototype;
      para.textContent = `${lowerCaseName}.__proto__ ссылается на объект ${removedBrackets}. Получается ${lowerCaseName}.__proto__ === ${removedBrackets}.Prototype. Результат я выведу сюда: ${result}`
      break;
    }
  }
  //changed this line from finding false to finding true because instead of false the result might be "undefined" or "null".
  if (para.textContent.indexOf(`true`) !== -1) {
    counter++
  }
  container.appendChild(para)
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
