const mainFunction = function() {
    // Функции высшего порядка
    let colorPallet = ['Black', 'Blue', 'Green', 'Yellow', 'Pink', 'Purple'];
    let value;
    const user = {
        name: 'Denis',
        statusAdmin: false,
        age: 22
    };

    // Функция принимает другую функцию в качестве аргумента:
    function mapArray(arr, fn) {
        let res = [];

        for (let i = 0; i < arr.length; i++) {
            res.push(fn(arr[i]));
        }

        return res;
    }

    function upperCase(el) {
        return el.toUpperCase();
    }

    value = mapArray(colorPallet, upperCase);

    // Функция возвращает другую функцию в качестве результата:
    function greeting(fullName) {
        return function (lastName) {
            return `Hello ${ fullName } ${ lastName }`
        }
    }

    const testGreeting = greeting('Denis');
    value = testGreeting('Raimer');
    value = greeting('Denis')('Raimer');

    // ----
    function question(job) {
        const list = {
            developer: 'Hello, developer ',
            teacher: 'Hello, teacher '
        };

        // if (job === 'developer') {
        //     return function (name) {
        //         value = `Hello, developer ${ name }`
        //     }
        // } else if(job === 'teacher') {
        //     return function (name) {
        //         value = `Hello, teacher ${ name }`
        //     }
        // }

        return function (name) {
            value = list[job] + name;
        }
    }

    question('teacher')('Tom');

    console.log(value);
};

mainFunction();
