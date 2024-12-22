const todoList = [];

function addTodo() {
  /**
   * @type {HTMLInputElement}
   */
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  todoList.push(name);
  console.log(todoList);

  inputElement.value = '';
}

/**
 * @param {any[]} array
 */

const testArrayForResults = [1, 2, 3];

function arraySwap(array) {
  let scopedArray = [...array];
  const firstElement = 0;
  const lastElement = scopedArray.length - 1;
  [scopedArray[firstElement], scopedArray[lastElement]] = [
    scopedArray[lastElement],
    scopedArray[firstElement],
  ];

  return scopedArray;
}

console.log(arraySwap(testArrayForResults));

console.log(testArrayForResults);

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

let j = 0;
while (j <= 10) {
  if (j % 2 === 0) {
    console.log(j);
  }
  j++;
}

function increasedArrByOne(array) {
  let scopedArray = [...array];
  for (let i = 0; i < scopedArray.length; i++) {
    scopedArray[i]++;
  }
  return scopedArray;
}

console.log(increasedArrByOne(testArrayForResults));

console.log(testArrayForResults);

function addNum(array, num) {
  let scopedArray = [...array];
  for (let i = 0; i < scopedArray.length; i++) {
    scopedArray[i] = scopedArray[i] + num;
  }
  return scopedArray;
}

console.log(addNum(testArrayForResults, 11));

function addArrays(array1, array2) {
  let resultArray = [];
  for (let i = 0; i < array1.length; i++) {
    resultArray[i] = array1[i] + array2[i];
  }
  return resultArray;
}

console.log(addArrays(testArrayForResults, [3, 2, 3]));

function countPositive(array) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      counter++;
    }
  }
  return counter;
}

console.log(countPositive([1, 2, 3, -2, 0, 5]));

function minMax(array) {
  let minNum = array[0] || null;
  let maxNum = array[0] || null;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxNum) {
      maxNum = array[i];
    }
    if (array[i] < minNum) {
      minNum = array[i];
    }
  }
  return [minNum, maxNum];
}

console.log(minMax([]));

function countWords(wordsArray) {
  let wordCounts = {};
  for (const word of wordsArray) {
    if (wordCounts[word]) {
      wordCounts[word] += 1;
    } else {
      wordCounts[word] = 1;
    }
  }
  return wordCounts;
}

console.log(countWords(['apple', 'grape', 'apple', 'apple', 'grape']));
