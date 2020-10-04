// Advanced JavaScript
// Замыкание

function createCalcFunction(n) {
    return function () {
        console.log(1000 * n);
    }
}

const calc = createCalcFunction(42);
calc();


function createIncrement(n) {
    return function (num) {
        return console.log(n + num);
    }
}

createIncrement(1)(6);
createIncrement(10)(60);

function urlGeneration(domain) {
    return function (url) {
        return console.log(`https://${url}.${domain}`);
    }
}

const comUrl = urlGeneration('com');
const ruUrl = urlGeneration('ru');

comUrl('google');
ruUrl('google');


// Создание своей функции BIND пример на context
function bind(context, fn) {
    return function (...args) {
        fn.apply(context, args);
    }
}

function logPerson() {
    console.log(`Person ${this.name}, ${this.age}`);
}

const person1 = {name: 'Teramo', age: 12};
const person2 = {name: 'Torero', age: 21};

bind(person1, logPerson);
bind(person2, logPerson);
