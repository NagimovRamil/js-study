"use strict";

// 31 урок
// ______________________________________




// 29 урок
// ______________________________________

// const box = document.getElementById('box');
// const btns = document.getElementsByTagName('button');
// const circles = document.getElementsByClassName('circle');
// const hearts = document.querySelectorAll('.heart');
// const oneHeart = document.querySelector('.heart');
// const wrapper = document.querySelector('.wrapper');
//
// // box.style.backgroundColor = 'blue';
// // box.style.width = "500px";
//
// box.style.cssText = 'background-color: green; width: px';
//
// btns[1].style.borderRadius = '100%';
// circles[0].style.backgroundColor = 'red';
//
// // for (let i = 0; i < hearts.length; i++) {
// //     hearts[i].style.backgroundColor = 'blue';
// // }
//
// hearts.forEach(item => {
//    item.style.backgroundColor = 'blue';
// });
//
// const div = document.createElement('div');
// // const text = document.createTextNode('Text');
//
// div.classList.add('black');
//
// // document.body.append(div);
//
// wrapper.append(div);
// // wrapper.appendChild(div);
//
// // wrapper.prepend(div);
// // wrapper.insertBefore(div, hearts[1]);
//
// // hearts[0].before(div);
//
// // hearts[0].after(div);
//
// // circles[0].remove();
// // wrapper.removeChild(hearts[1]);
//
// // hearts[0].replaceWith(circles[0]);
// // wrapper.replaceChild(circles[0], hearts[0]);
//
// div.innerHTML = "<h1>Hello World</h1>";
//
// // div.textContent = "Hello";
//
// div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');

// 28 урок
// ______________________________________

// const box = document.getElementById('box');
// console.log(box);
//
// const btns = document.getElementsByTagName('button');
// // const btns = document.getElementsByTagName('button')[1];
// console.log(btns[1]);
//
// const circles = document.getElementsByClassName('circle');
// console.log(circles);
//
// const hearts = document.querySelectorAll('.heart');
// // console.log(hearts);
// hearts.forEach(item => {
//    console.log(item);
// });
//
// const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);

// 27 урок
// ______________________________________

// let x = 5; alert( x++ );

// [ ] + false - null + true // Nan, потому что:
// console.log(typeof ([] + false)); //"false"
// console.log ([] + false - null); //NaN

// // let y = 1; let x = y = 2; alert(x);
// let y = 1;
// let x = y = 2;
// // alert(x);
// console.log(x); // 2

// console.log([ ] + 1 + 2); // "12"

// alert( "1"[0] ); // 1

// console.log(2 && 1 && null && 0 && undefined); // null

// console.log(!!( 1 && 2 ) === (1 && 2)); // false (!! convert an expression to boolean)

// alert( null || 2 && 3 || 4 ); //3

// const a = [1, 2, 3];
// const b = [1, 2, 3];
// console.log(a==b); // false

// alert( +"Infinity" ); //Infinity

// console.log("Ёжик" > "яблоко"); // false

// console.log(0 || "" || 2 || undefined || true || falsе ); // 2

// 26 урок
// ______________________________________

// // 1)
// console.log(typeof (String(null)));
// console.log(typeof (String(4)));
//
// // 2) string через конкатенацию
// console.log(typeof (4 + ''));
//
// const num = 5;
//
// console.log("https://vk.com/catalog/" + num);
//
// const fontSize = 26 + 'px';

// To Number

// // 1)
// console.log(typeof (Number('4')));
//
// // 2)
// console.log(typeof (+'4'));
//
// // 3)
// console.log(typeof (parseInt('15px', 10)));
//
//
// let answ = +prompt("Hello", "");

// To boolean

// 0, '', null, undefined, NaN; // <-false

// // 1)
// let switcher = null;
//
// if (switcher) {
//     console.log('Working');
// }
//
// switcher = 1;
//
// if (switcher) {
//     console.log('Working...');
// }

// // 2)
//
// console.log(typeof (Boolean('4')));

// // 3)
// console.log(typeof (!!'4'));

// 23 урок
// ______________________________________

// // let str = 'some';
// // let strObj = new String(str);
//
// // console.log(typeof (str));
// // console.log(typeof (strObj));
// //
// // console.dir([1,2,3]);
//
// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log("Hello");
//     }
// };
//
// // const john = {
// //     health: 100
// // };
// //
// // Object.setPrototypeOf(john, soldier);
// // john.sayHello();
//
// const john = Object.create(soldier);
//
// john.sayHello();

// 22 урок
// ______________________________________

// // let a = 5,
// //     b = a;
// //
// // b = b + 5;
// //
// // console.log(b);
// // console.log(a);
// //
// // const obj = {
// //     a: 5,
// //     b: 1
// // };
//
// // const copy = obj;
// //
// // copy.a = 10;
// //
// // console.log(copy);
// // console.log(obj);
//
// function copy(mainObj) {
//     let objCopy = {};
//
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//
//     return objCopy;
// }
//
// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };
//
// const newNumbers = copy(numbers);
//
// newNumbers.a = 10;
//
// // console.log(newNumbers);
// // console.log(numbers);
//
// const add = {
//     d: 17,
//     e: 20
// };
//
// // console.log(Object.assign(numbers, add));
//
// const clone = Object.assign({}, add);
//
// clone.d = 20;
//
// // console.log(add);
// // console.log(clone);
//
// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();
//
// newArray[1] = 'dfsfsfsfe';
// // console.log(newArray);
// // console.log(oldArray);
//
// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];
//
// // console.log(internet);
//
// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
//
// const num = [2, 5, 7];
//
// log(...num);
//
// const array = ['a', 'b'];
//
// const newAray = [...array];
//
// const q = {
//     one: 1,
//     two: 2
// };
//
// const newObj = {...q};

// 21 урок
// ______________________________________

// const arr = [1, 2, 32, 6, 8, 10, 12];
// arr.sort(compareNum);
// console.log(arr);
//
//
// function compareNum(a, b) {
//     return a-b;
// }
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function (value, index, array) {
//     console.log(`${index}: ${value} внутри массива ${array}`);
// });

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort(compareNum);
// console.log(products.join('; '));



// arr.pop();
// arr.push(10);
//
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
//
// for (let value of arr) {
//     console.log(value);
// }

// 20 урок
// ______________________________________

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () {
//         console.log("Test");
//     }
// };
//
// const {border, bg} = options.colors;
// console.log(border);

// options.makeTest();

// console.log(Object.keys(options).length);

// console.log(options.name);
//
// delete options.name;
//
// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof (options[key]) === "object") {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// 19 урок
// ______________________________________

// function first() {
//     setTimeout(function () {
//        console.log(1);
//     }, 500);
// }
//
// function second() {
//     console.log(2);
// }
//
// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }
//
// function done() {
//     console.log('Я прошел этот урок');
// }
//
// learnJS('JavaScript', done);

// 17 урок
// ______________________________________

// const str = "test";
// const arr = [1, 2, 4];
//
// console.log(str.length);
// console.log(arr.length);
//
// console.log(str[2]);
//
// console.log(str.toUpperCase());
//
// const fruit = "Some fruit";
//
// console.log(fruit.indexOf("fruit"));
//
// const logg = "Hello world";
//
// console.log(logg.slice(6, 11));
// console.log(logg.slice(-5, -1));
// console.log(logg.substring(6, 11));
// console.log(logg.substr(6,5));
//
// const num = 12.2;
// console.log(Math.round(num));
//
// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));

// 16 урок
// ______________________________________

// let num = 20;
//
// function showFirstMessage(text) {
//     console.log(text);
//     // let num = 10;
//     console.log(num)
// }
//
// showFirstMessage("Hello world!");
// console.log(num);
//
// function calc(a, b) {
//     return (a + b);
// }
//
// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));
//
// function ret() {
//     let num = 50;
//     return num;
// }
//
// const anotherNum = ret();
// console.log(anotherNum);
//
// const logger = function () {
//   console.log("Hello")
// };
//
// logger();
//
// const calc = (a, b) => { return a + b };

// 14 урок
// ______________________________________

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);

// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }


// 13 урок
// ______________________________________

// if (4 == 9) {
//     console.log('Ok!')
// } else {
//     console.log('Erorr!')
// }
//
// const num = 50;
//
// if (num < 49) {
//     console.log('Erorr!');
// } else if (num > 100) {
//     console.log('Много!');
// } else console.log('Ok!');

// (num === 50) ? console.log('Ok!') : console.log('Erorr!');

// switch (num) {
//     case 49:
//         console.log('Неверно!');
//         break;
//     case 100:
//         console.log('Неверно!');
//         break;
//     case 50:
//         console.log('В точку!');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }

// 9 урок
// ______________________________________

// let incr = 10,
//     decr = 10;
// // incr++;
// // decr--;
//
// console.log(++incr);
// console.log(--decr);
//
// console.log(5%2);
// console.log(2*4 == 8);
// console.log(2*4 === '8');

// 8 урок
// ______________________________________

// const category = 'toys';
//
// console.log(`https://someurl.com/${category}`);

// 2 урок
// ______________________________________

// // alert('Hello');
//
// // const result = confirm("Are you here?");
// // console.log(result);
//
// // const answer = +prompt("Вам есть 18?", "18");
// // console.log(typeof (answer));
//
// const answers = [];
//
// // answers[0] = prompt('Какое ваше имя?', '');
// // answers[1] = prompt('Какая ваша фамилия?', '');
// // answers[2] = prompt('Сколько вам лет?', '');
//
// // document.write(answers);
// console.log(typeof (answers));

// 1 урок
// ______________________________________

// let a = 15;
//
// let number = 5;
// const leftBorderWidth = 1;
//
// number = 10;
// console.log(number);
//
// var name = 'Ivan';
//
// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };
//
// console.log(obj.name);
// console.log(obj["name"]);
//
// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(arr[1]);