const input = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const para = document.getElementById('results-div');

const phoneRegex =
  /^(?:1\s?)?(?:\(\d{3}\)|\d{3})(?:[\s-]?\d{3})(?:[\s-]?\d{4})$/;
const invalidChars = /[^0-9()\s-?]/;

[
  '1 555-555-5555',
  '1 (555) 555-5555',
  '1(555)555-5555',
  '1 555 555 5555',
  '5555555555',
  '555-555-5555',
  '(555)555-5555',
].forEach((num) => {
  console.log(num, phoneRegex.test(num));
});

const clearResult = () => {
  para.textContent = '';
};

const checkInput = () => {
  const value = input.value.trim();
  console.log(value);
  value === ''
    ? alert('Please provide a phone number')
    : phoneRegex.test(value)
    ? (para.textContent = `Valid US number: ${value}`)
    : (para.textContent = `Invalid US number: ${value}`);
};

checkBtn.addEventListener('click', checkInput);
clearBtn.addEventListener('click', clearResult);
