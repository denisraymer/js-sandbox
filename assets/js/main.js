function mainFunction() {
    // Numbers
    const num1 = 10;
    const num2 = 20;
    let value;

    // + * / - %

    value = num1 + num2;
    value = value + 100;
    value += 100;
    // value = num1 / num2;
    // value = value % 4;
    // value %= 4;

    value++;
    value--;

    ++value;
    --value;

    value = 0.6 + 0.7;
    // value = +value.toFixed(1);
    value = parseFloat(value.toFixed(1));
    // value = (0.6 * 10 + 0.7 * 10) / 10;

    // Math
    value = Math.PI;
    value = Math.random();
    value = Math.round(2.5);
    value = Math.ceil(2.2); // Округляет в большую сторону
    value = Math.floor(2.9); // Округляет в меньшую сторону
    value = Math.min(14, 23, 2124, 32, 6, 235);
    value = Math.max(14, 23, 2124, 32, 6, 235);
    value = Math.floor(Math.random() * 10 + 1);

    // Вывод рандомного цвета
    const colorsArray = ['BLack', 'Blue', 'Green', 'Yellow', 'Pink', 'Purple'];
    value = Math.floor(Math.random() * colorsArray.length);

    console.log(value, colorsArray[value]);
    console.log(typeof value);
}

mainFunction();
