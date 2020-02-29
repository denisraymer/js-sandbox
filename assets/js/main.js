// Функции

const user = {
    name: 'Denis',
    statusAdmin: false,
    age: 22
};
let colorPallet = ['Black', 'Blue', 'Green', 'Yellow', 'Pink', 'Purple'];
let value;

// Function declaration
function userAuthentication(name, status = false) {
    if (name === 'admin') {
        return !status
    }

    return console.error('Access is denied !')
}

value = userAuthentication('admin');

value !== undefined ? console.log(value) : '';

// Function expression
const square = function (x) {
    return x * x
};

//
(function (msg) {
    console.log(msg)
})('Hello world');
