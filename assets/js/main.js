function mainFunction() {
    // Тернарный оператор
    const user = {
        name: 'Denis',
        statusAdmin: false,
        age: 22
    };
    let colorPallet = ['Black', 'Blue', 'Green', 'Yellow', 'Pink', 'Purple'];
    let value;

    value = user.statusAdmin ? !user.statusAdmin : 'No access';

    switch (colorPallet[0]) {
        case 'Black':
            value = 'It the Black color';
            break;
        case 'Blue':
        case 'Green':
            value = 'It the Blue and Greens colors';
            break;
        default:
            value = 'There is no color';
    }

    console.log(value);
}

mainFunction();
