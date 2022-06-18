/*

//ES6 DAN ÖNCE

var slugify = require('slugify');

var text = slugify("yazı arasındaki boşlukları doldurma");

console.log(text);


console.log(slugify("yazı arasındaki boşlukları doldurma", "_"));


//ES6 DAN SONRA 
NOT: PACKAGE.JSON dosyasına     "type": "module", eklenmesi gerekmektedir.


import slugify from 'slugify';

var text = slugify("yazı arasındaki boşlukları doldurma");

console.log(text);


console.log(slugify("yazı arasındaki boşlukları doldurma", "_"));

*/

/*

import exportt, { function1, function2, users } from './my-module.js';

function1();
function2();

console.log(users);


//defaul exportların ismi aynı olmak zorunde dağil
exportt();

*/

/*

const sayHi = (cb) => {
    cb();
}

sayHi(() => {
    console.log("callbackFunction Example");
});

*/

/*

import fetch from 'node-fetch';

(async() => {

    const post1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
    const post2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();

    console.log(post1);
    console.log(post2);

})();

*/

import axios from 'axios';

(async() => {

    const { data: post1 } = await axios("https://jsonplaceholder.typicode.com/posts/1");
    const { data: post2 } = await axios("https://jsonplaceholder.typicode.com/posts/2");

    console.log(post1);
    console.log(post2);

})();