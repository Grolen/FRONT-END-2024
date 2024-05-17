const container = document.querySelector('.container');

const divsAmount = 256;

for (let i = 1; i <= divsAmount; i++) {
      const div = document.createElement('div');
      div.classList.add("div-child")
      div.textContent = `${i}`;
      container.appendChild(div);
}