// TODO: I need to write a palindrome checker

// *step 1: pull out the input and button from HTML

const input = document.querySelector('#palindrome');

const button = document.querySelector('.palindrome-checker');

const p = document.querySelector('.result');

let isItPalindrome;

const palCheckerFunc = (arr) => {
  for (let i = 0; i < arr.length / 2; ) {
    const firstEl = arr[i];
    const lastEl = arr[arr.length - 1 - i];
    if (firstEl !== lastEl) {
      isItPalindrome = false;
      break;
    } else {
      i++;
      isItPalindrome = true;
    }
  }
};

// *step 2: create an event listener that will process a value from the input

button.addEventListener('click', (e) => {
  e.preventDefault();
  const value = input.value;

  // *step 3: inside the listener I need:

  // a. remove all the dots and spaces in the value (using regex or alt)

  const regex = /[\. ,_:-]+/g;
  const cleanValue = value.replace(regex, '');

  // b. .split("") the value and make it an array

  const arrValue = cleanValue.split('');

  // c. create a length checker (odd or even), using "if" statement

  // ? d. write code for both cases. if even - divide the array in half, if odd - use the element thats on the middle and double it (ex: "abcba" - "c" in the middle so I need to make it read for my code as "abccba")

  if (arrValue.length % 2 === 0) {
    palCheckerFunc(arrValue);
  } else {
    const middleEl = (arrValue.length + 1) / 2 - 1;
    arrValue.splice(middleEl, 0, arrValue[middleEl]);
    palCheckerFunc(arrValue);
  }

  // e. show to a user the result of his value he did put

  if (arrValue.length === 0) {
    p.textContent = 'Please enter a valid value.';
  } else if (isItPalindrome) {
    p.textContent = 'Yay! You entered a palindrome!';
  } else {
    p.textContent = 'Unfortunately, it is not a palindrome :c';
  }

  input.value = '';
});
