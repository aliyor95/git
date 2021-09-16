'use strict';
// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// let i = 0;
// do {
//     console.log(i);
//     i++;
// }while (i < 10);

// let i = 0
// while(i < 10) {
//     console.log(i)
//     i++
// }

// let answers = [];
// let questions = ['What is your name?', 'What is your phone?', 'How old are you?'];

// for (let i = 0; i < questions.length; i++) {
//     answers[i] = prompt(questions[i])
// }
// console.log(answers)

// let i = 0;
// do {
//     answers[i] = prompt(questions[i])
//     i++
// } while (i < questions.length)
// console.log(answers)

// let i = 0;
// while (i < questions.length) {
//     answers[i] = prompt(questions[i])
//     i++;
// }
// console.log(answers);

// let person = {
//     name: 'Aliyor',
//     age: 25,
//     isMarried: false
// }

// console.log(person.name)

// let arr = ['Phone', 'Name', 'Girl', [], {}]
// console.log(arr)
// arr[0] = 'TV'
// console.log(arr)

// let ism = 'Sizning ismingiz: ' + prompt('Sizning ismingiz')
// let yosh = 'Sizning yoshingiz: ' + prompt('Sizning yoshingiz')
// let jins = 'Sizning jinsingiz: ' + prompt('Sizning jinsingiz')

// let person = {
//     name: 'Alex',
//     age: yosh,
//     sex: jins
// }

// console.log(person)

// let age = prompt('yoshing?')

// if (age < 25) {
//     alert('note')
// } else if (age > 40) {
//     alert('note')
// } else {
//     alert('ok')
// }

// let age = +prompt('yoshing?')

// switch (age) {
//     case 25:
//         prompt('nechi yosh bolishni xoxlaysiz')
//         case 26:
//             alert('yaqinda xudo xolasa shu yoshga kirasiz')
//         break;
//     case 18:
//         alert('note');
//         break;
//     default:
//         alert('note');
// }

// function alexBrain(name) {
//     console.log(`Sening isming ${name}`)
// }
// alexBrain('Alex')
// alexBrain('Brain')

// let fun = function () {
//     console.log('yangi func')
// }
// fun()

// let num = 5
// function funct() {
//     let num = 15
//     num++
//     console.log(num)
// }
// funct()
// console.log(num)
// pro('Alex')
// pro('Brain')
// pro('Max')
// function pro(name) {
//     console.log(`Mening ismim ${name}`)
// }

// const logger = function() {
//     console.log('yozuv')
// }

// logger()

// function fun(name, age) {
//     alert(`Mening ismim ${name} men dasturchiman`);

//     function skilShow() {
//         let skills = ['Html', 'Css', 'JavaScript'];
//         for (let i = 0; i < skills.length; i++) {
//             alert(`You have skills ${skills[i]}`);
//         }
//     }
//     skilShow();

//     function checkAge() {
//         if (age > 18) {
//             alert('zor');
//         } else if (age < 18) {
//             alert('yaxshi');
//         } else {
//             alert('ok');
//         }
//     }
//     checkAge();

//     function calcPow(num) {
//         return num * num;
//     }
//     console.log(calcPow(5));
// }
// fun('Aliyor', 25);

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log(`Hello ${this.name}`);
//     };
// }

// User.prototype.exit = function () {
//     console.log(`User ${this.name} exit`);
// };

// const Aliyor = new User('Aliyor', 1995);
// const Mohinur = new User('Mohinur', 2002);
// const Ziyoda = new User('Ziyoda', 2002);
// console.log(Aliyor);
// console.log(Mohinur);

// Aliyor.exit();
// Mohinur.exit();
// Ziyoda.hello();

// function hi() {
//     console.log(this)
// }

// hi()
// let x = 5
// alert(x++)
// let x = [] + false - null + true;
// console.log(x)
// let y = 1
// let x = y = 2
// console.log(x)
// let x = [] + 1 + 2
// console.log(x)
// alert('1'[0])
// let a = [1, 2, 3]
// let b = [1, 2, 3]
// console.log(a == b)
// alert(+'Infinity')

const name = 'Aliyor'
