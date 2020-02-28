function mainFunction() {
    // Object
    const user = {
        name: 'Denis',
        age: 22
    };
    let value;

    // .hasOwnProperty('prop') - проверяет на наличие свойства не проверяет на наличие значения
    if (user.hasOwnProperty('name')) {
        value = user.name;
    } else {
        value = 'false';
    }

    // || - приобразовывает к true,
    // && - приобразовывает к false

    value = 1 || 0; // true
    value = 1 && 0; // false

    if (user.age >= 18 || user.age >= 21) {
        value = 'Some actions';
    } else {
        value = 'No actions';
    }

    // Присвоение значения переменной
    value = user.name || 'Den';
    value = 1 && 0 && 2 && 3;

    if (user.age >= 21 && user.age <= 65) {
        value = 'Some actions';
    } else {
        value = 'No actions';
    }

    console.log(value);
}

mainFunction();
