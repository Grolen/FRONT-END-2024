// TODO: I need to write a palindrome checker

// *step 1: pull out the input and button from HTML

const input = document.querySelector('#palindrome');

const button = document.querySelector('.palindrome-checker');

const p = document.querySelector('.result');

let isItPalindrome;

const palCheckerFunc = (str, revStr) => {
  if (str === revStr) {
    isItPalindrome = true;
  } else {
    isItPalindrome = false;
  }
};

// *step 2: create an event listener that will process a value from the input

button.addEventListener('click', (e) => {
  e.preventDefault();
  const value = input.value;

  // *step 3: inside the listener I need:

  // a. remove all the dots and spaces in the value (using regex or alt), change all the chars to lower case
  // b. make a reversed value

  const regex = /[\. ,_:-]+/g;
  const processedValue = value.replace(regex, '').toLowerCase();
  const revValue = processedValue.split('').reverse().join('');

  // c. create a palindrome checker, using "if" statement

  palCheckerFunc(processedValue, revValue);

  // e. show to a user the result of his value he did put

  if (processedValue === '') {
    alert('Please enter a valid value.');
  } else if (isItPalindrome) {
    p.textContent = `Yay! ${value} is a palindrome!`;
  } else {
    p.textContent = `Unfortunately, ${value} is not a palindrome :c`;
  }

  // f. clear the input for next value

  input.value = '';
});
