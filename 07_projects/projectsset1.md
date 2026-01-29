# Projects related to DOM

## project 1

```javascript
console.log("Hemali")

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (chai) {
    console.log(chai);
    console.log(chai.target);
    if (chai.target.id === 'grey') {
      body.style.backgroundColor = chai.target.id;
    }
    if (chai.target.id === 'white') {
      body.style.backgroundColor = chai.target.id;
    }
    if (chai.target.id === 'blue') {
      body.style.backgroundColor = chai.target.id;
    }
    if (chai.target.id === 'yellow') {
      body.style.backgroundColor = chai.target.id;
    }
    if (chai.target.id === 'purple') {
      body.style.backgroundColor = chai.target.id;
    }
  });
});

```

## Project 2
```javascript
const form = document.querySelector('form');
// this usecase will  give you empty
// const height = parseInt(document.querySelector('#height').value)
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weihgt = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weihgt === '' || weihgt < 0 || isNaN(weihgt)) {
    results.innerHTML = `Please give a valid weight ${weihgt}`;
  } else {
    const bmi = (weihgt / ((height * height) / 10000)).toFixed(2);
    // show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});



```