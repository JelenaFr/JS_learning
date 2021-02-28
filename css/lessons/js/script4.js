'use strict';



const box = document.getElementById('box');

console.log(box);

// v peremennuju btns prihodit ne odin element, a psevdomassiv

const btns = document.getElementsByTagName('button');

// chtob poluchit konkretnuju knopku
//const btns = document.getElementsByTagName('button')[1];
console.log(btns[1]); 

const circles = document.getElementsByClassName('circle');
console.log(circles);
// vo vnutr kruglyh skobok metoda querySelectorAll() my pomeshhajem SCC selector
const hearts = document.querySelectorAll('.heart');

console.log(hearts);
hearts.forEach(item =>{
    console.log(item);

});
const oneHeart = document.querySelector('.herat');

box.style.backgroundColor = 'blue';
box.style.width = '500px';
box.style.cssText = 'background-color: green; width: 300px';

let width =400;
box.style.cssText = `background-color: green; width:${width}px`;

btns[2].style.borderRadius = '100%';
circles[2].style.backgroundColor = 'red'; 

// for(let i = 0; i<hearts.length; i++ ){
//     hearts[i].style.backgroundColor = 'yellow';
// }

hearts.forEach(item =>{
    item.style.backgroundColor = 'black';
});

const div = document.createElement('div');
const text = document.createTextNode('I am here');

div.classList.add('black');
//document.body.append(div);

const wrapper = document.querySelector('.wrapper');
//document.querySelector('.wrapper').append(div);
//wrapper.appendChild(div);
wrapper.append(div);
//wrapper.prepend(div);
//hearts[0].before(div);
//hearts[4].after(div);
//wrapper.insertBefore(div, hearts[1]);
//circles[1].remove();
//wrapper.removeChild(hearts[1])

//hearts[0].replaceWith(circles[0]);
//wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1>Hello World</h1>!";
//div.textContent = "Hello JS";
div.insertAdjacentHTML("beforebegin", "<h2>HELLO</h2>");
