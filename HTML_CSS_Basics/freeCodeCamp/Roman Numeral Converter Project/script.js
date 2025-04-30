const input = document.getElementById('number');
const btn = document.getElementById('convert-btn');
const p = document.getElementById('output');

const numeralsTable = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
];

// input.addEventListener('keydown', (e) => {
//   if ((e.key = 'Enter')) {
//     btn.click();
//   }
// });

btn.addEventListener('click', () => {
  let value = input.value;
  if (!value) {
    p.innerText = 'Please enter a valid number';
  } else if (value < 0) {
    p.innerText = 'Please enter a number greater than or equal to 1';
  } else if (value > 3999) {
    p.innerText = 'Please enter a number less than or equal to 3999';
  } else {
    p.innerText = '';
    let result = '';
    for (const [number, roman] of numeralsTable) {
      while (value >= number) {
        result += roman;
        value -= number;
      }
    }
    p.innerText = result;
  }
});
