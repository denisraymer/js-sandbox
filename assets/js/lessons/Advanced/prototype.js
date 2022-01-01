// Advanced JavaScript
// PROTOTYPE
// __proto__ это свойство которое наследуется от родительского класса,
// поиск свойств осуществляется по цепочке сверху вниз

// const root = document.getElementById('root');
// const data = ['data1', 'data2', 'data3', 'data4', 'data5', 'data6'];

const person = new Object({
    age: 16,
    name: 'Momo',
    greet: function () {
        console.log('Greet!');
    }
});

Object.prototype.sayHello = function (value) {
    console.log(value);
};

// const str = new String('Строка c __proto__');

const lena = Object.create(person);

lena.name = 'Hololo';
