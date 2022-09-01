"use strict";

// 65 урок
// ______________________________________

// new RegExp('pattern', 'flags');
// /pattern/flag

// const ans = prompt('Введите ваше имя');

// const reg = /n/ig;
// // i - вне зависимости от регистра
// // g - сразу несколько вхождений
// // m - многострочный режим
// console.log(ans.match(reg));

// const pass = prompt('Password');

// \ - экранирование
// console.log(pass.replace(/./g, "*"));
// console.log('12-34-56'.replace(/-/g, ':'));
// console.log(reg.test(ans));

const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i));



// \d - цифры
// \D - не цифры
// \w - слова
// \W - не слова
// \s - пробелы

// 64 урок
// ______________________________________

// localStorage.setItem('number', 5);
//
// // console.log(localStorage.getItem('number'));
//
// localStorage.removeItem('number');
//
// localStorage.clear();

// 57 урок
// ______________________________________

//filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];
//
// const shortNames = names.filter(function (name) {
//    return name.length < 5;
// });
//
// console.log(shortNames);

//map

// let answers = ['IvAn', 'AnnA', 'Hello'];
//
// answers = answers.map(item => item.toLowerCase());
//
// console.log(answers);

//every/some

// const some = [4, 'qwq', 'qdfsfdfsf'];
//
// // console.log(some.some(item => typeof(item) === 'number'));
// console.log(some.every(item => typeof(item) === 'number'));

//reduce

// const arr = [4, 5, 1, 3, 2, 6];
// const res = arr.reduce((sum, current) => sum + current, 3);
// console.log(res);

// const arr = ['apple', 'pear', 'plum'];
// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);

// const obj = {
//     ivan: 'person',
//     ann: 'person',
//     dog: 'animal',
//     cat: 'animal'
// };
//
// const newArr = Object.entries(obj)
//     .filter(item => item[1] === 'person')
//     .map(item => item[0]);
//
// console.log(newArr);

// 55 урок
// ______________________________________

// // console.log('Запрос данных...');
// //
// // const req = new Promise(function (resolve, reject) {
// //     setTimeout(() => {
// //         console.log('Подготовка данных...');
// //
// //         const product = {
// //             name: 'TV',
// //             price: 2000
// //         };
// //
// //         resolve(product);
// //     }, 2000);
// // });
// //
// // req.then((product) => {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             product.status = 'order';
// //             resolve(product);
// //         }, 2000);
// //     });
// // }).then(data => {
// //     data.modify = true;
// //     return data;
// // }).then((data) => {
// //     console.log(data);
// // }).catch(() => {
// //    console.error('Произошла ошибка');
// // }).finally(() => {
// //     console.log('Finally');
// // });
//
// const test = time => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), time);
//     });
// };
//
// // test(1000).then(() => console.log('1000 ms'));
// // test(2000).then(() => console.log('2000 ms'));
//
// // Promise.all([test(1000), test(2000)]).then(() => {
// //    console.log('All');
// // });
//
// Promise.race([test(1000), test(5000)]).then(() => {
//     console.log('Race');
// });

// 51 урок
// ______________________________________

// const person = {
//     name: 'Alex',
//     tel: '+7444444',
//     parents: {
//         mom: 'Olga',
//         dad: 'Mike'
//     }
// };
//
// // console.log(JSON.parse(JSON.stringify(person)));
// const clone = JSON.parse(JSON.stringify(person));
// clone.parents.mom = 'Ann';
// console.log(person);
// console.log(clone);

// 49 урок
// ______________________________________

// const log = function (a, b, ...rest) {
//     console.log(a, b, rest);
// }
//
// log('basic', 'rest', 'operator', 'usage');
//
// function calcOrDouble(number, basis = 2) {
//     console.log(number * basis);
// }
//
// calcOrDouble(3);

// 47 урок
// ______________________________________

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
//
//     calcArea() {
//         return this.height * this.width;
//     }
// }
//
// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);
// console.log(square.calcArea());
// console.log(long.calcArea());
//
// class ColoredRectangleWithText extends Rectangle {
//     constructor(height, width, text, bgColor) {
//         super(height, width);
//         this.text = text;
//         this.bgColor = bgColor;
//     }
//
//     showMyProps() {
//         console.log(`Текст: ${this.text}`)
//     }
// }
//
// const div = new ColoredRectangleWithText(25, 10, 'Hello world', 'red');
//
// div.showMyProps();
// console.log(div.calcArea());


// 46 урок
// ______________________________________

// //1:
// // function showThis(a, b) {
// //     console.log(this);
// //     function sum() {
// //         console.log(this);
// //         return a + b;
// //     }
// //
// //     console.log(sum());
// // }
// // showThis(4, 5);
//
// //2:
// // const obj = {
// //     a: 20,
// //     b: 15,
// //     sum: function () {
// //         console.log(this);
// //     }
// // }
// // obj.sum();
//
// //3:
// // function User(name, id) {
// //     this.name = name;
// //     this.id = id;
// //     this.human = true;
// // }
// // let ivan = new User('Ivan', 28);
//
// //4:
// // function sayName(surname) {
// //     console.log(this);
// //     console.log(this.name + surname);
// // }
// //
// // const user = {
// //     name: 'John'
// // };
// //
// // sayName.call(user, 'Smith');
// // sayName.apply(user, ['Smith']);
// //
// // // bind - создает новую функцию связанную с определенным контекстом
// // function count(num) {
// //     return this*num;
// // }
// //
// // const double = count.bind(2);
// // console.log(double(13));
//
// // 1) Обычная функция: this = window, но если use strict = undefined;
// // 2) Контекст у методов объекта - сам объект
// // 3) this в конструкторах и классах - это новый экземпляр объекта
// // 4) Ручная привязка this: call, apply, bind
//
// const btn = document.querySelector('button');
// // btn.addEventListener('click', function () {
// //     // console.log(this);
// //     this.style.backgroundColor = 'red';
// // });
// btn.addEventListener('click', function (e) {
//     // console.log(this);
//     e.target.style.backgroundColor = 'red';
// });
//
// const obj = {
//     num: 5,
//     sayNumber: function () {
//         const say = () => {
//             console.log(this);
//         };
//
//         say();
//     }
// };
//
// obj.sayNumber();
//
// const double = a => a * 2;
// console.log(double(4));

// 45 урок
// ______________________________________

// // const num = new Number(3);
// // console.log(num);
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log(`Hello ${this.name}`);
//     }
// }
//
// User.prototype.exit = function () {
//     console.log(`Пользователь ${this.name} ушел`)
// }
//
// const ivan = new User('Ivan', 28);
// const alex = new User('Alex', 20);
//
// ivan.exit();
//
// ivan.hello();
// alex.hello();
//
// console.log(ivan);
// console.log(alex);

// 40 урок
// ______________________________________
// // const now = new Date();
//
// // const now = new Date('2022-08-22');
// // new Date.parse('2022-08-22');
//
// // const now = new Date(2022, 8, 22, 20);
// // const now = new Date(0);
// // const now = new Date(-99999999999);
//
// // console.log(now);
// // console.log(now.getFullYear());
// // console.log(now.getMonth());
// // console.log(now.getDate());
// // console.log(now.getDay());
// // console.log(now.getUTCHours());
//
// // console.log(now.getTimezoneOffset());
// // console.log(now.getTime());
// // console.log(now.setHours(18, 40));
// // console.log(now);
//
// let start = new Date();
//
// for (let i = 0; i < 100000; i++) {
//     let some = i ** 3;
// }
//
// let end = new Date();
//
// alert(`Цикл отработал за ${end - start} миллисекунд`);

// 35 урок
// ______________________________________

// const p = document.querySelectorAll('p');
// console.log(p);

// 34 урок
// ______________________________________
//     // touchstart
//     // touchmove
//     // touchend
//     // touchenter
//     // touchleave
//     // touchcancel
//
// window.addEventListener('DOMContentLoaded', () => {
//     const box = document.querySelector('.box');
//
//     box.addEventListener('touchstart', (e) => {
//         e.preventDefault();
//
//         console.log('Start');
//     });
//
//     box.addEventListener('touchmove', (e) => {
//         e.preventDefault();
//
//         console.log('Move');
//     });
// });
//
// // touches - список всех пальцев которые сейчас на экране
// // targetTouches
// // changedTouches

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