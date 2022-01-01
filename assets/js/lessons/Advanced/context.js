// Advanced JavaScript
// Context
// Слово THIS указывает на тот объект в контексте которого оно было вызвано
// Метод bind Необходим для привязки контекста к объекту (Возвращает новую функцию
// и ты можешь вызвать её когда тебе будет угодно)
// Метод call Необходим для привязки контекста к объекту (Сразу вызывает функцию параметры передаются через запятую)
// Метод apply Необходим для привязки контекста к объекту (Сразу вызывает функцию параметры передаются в массиве)

function hello() {
    console.log('Hello', this);
}

const person = {
    name: 'GoLang',
    age: 16,
    sayHello: hello,
    sayHelloWindow: hello.bind(window),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`);
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Phone is ${phone}`);
        console.log(`Job is ${job}`);
        console.groupEnd();
    }
}

const lena = {
    name: 'Lena',
    age: 18
}

hello(); // Указывает на объект Window

person.sayHello(); // Указывает на объект person
person.logInfo('BackEnd', '8-532-874-71-05'); // Указывает на объект person

// person.logInfo.bind(lena)() // Указывает на объект lena

const fnPersonInfo = person.logInfo.bind(lena, 'FrontEnd', '8-902-354-21-35'); // Указывает на объект lena
fnPersonInfo();


