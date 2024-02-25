var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */

// const handleClick = () => {
//   currentImg = imgAttr;
//   displayedImage.setAttribute('src', currentImg)
// }

for (let i = 1; i <= 5; i++) {  
  var newImage = document.createElement('img');
  newImage.setAttribute('src', `images/pic${i}.jpg`);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', event => {
    displayedImage.setAttribute('src', event.target.src)
  })
}


/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Светлее';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Темнее';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
