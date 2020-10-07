// EventLoop/Context

// Для визуализации работы EventLoop используйте: https://github.com/latentflip/loupe


// Пример работы EventLoop
console.log('Start');

setTimeout(function () {
    console.log('Inside setTimout');
}, 6000);

console.log('Finish');


// Пример работы контекста
let a = 'Hello World';

function first() {
    console.log('Inside first function');
    second();
    console.log('Again inside first function');
}

function second() {
    console.log('Inside second function');
}

first();
console.log('Inside Global Execution Context');
