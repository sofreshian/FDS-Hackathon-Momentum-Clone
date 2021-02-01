// src/js/main.js
// ES6 모듈
import { pi, power, Foo } from './lib';

console.log(pi);

console.log(power(pi, pi));
const f = new Foo();
console.log(f.foo());

console.log(f.bar());

const $hello = document.querySelector('.hello');

console.log($hello);

fetch('http://localhost:8000/todos')
  .then(res => res.json())
  .then(todos => {
    console.log(todos);
    $hello.textContent = todos[0].id;
  })
  .catch(err => console.error(err));
