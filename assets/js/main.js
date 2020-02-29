// Методы массивов
const user = {
    name: 'Denis',
    statusAdmin: false,
    age: 22
};

const mainFunction = function() {
    let colorPallet = ['Black', 'Blue', 'Green', 'Yellow', 'Pink', 'Purple'];
    let value;

    value = colorPallet.length;
    // colorPallet.length = 0;
    // colorPallet.length = 100;

    value = Array.isArray(colorPallet); // Проверка на массив это или нет
    value = colorPallet[2] = 'Greens';

    value = colorPallet.indexOf('Yellow'); // Получение индекса нискомого элемента
    value = colorPallet[value]; // Получение значения по индексу

    value = colorPallet.push('Orange'); // Добавляет в конец
    value = colorPallet.pop(); // Удаляет последниэ элемент
    value = colorPallet.unshift('Orange'); // Добавляет в начало
    value = colorPallet.shift(); // Удаляет начальный элемент
    value = colorPallet.slice(0, 2); // Вырезает по индексу
    value = colorPallet.splice(0, 2, 'Grey', 'White'); // Удаляет и возвращет удаленные элементы, добавляет на место удаленных новое значение
    value = colorPallet.reverse();
    value = colorPallet.concat(value); // Объединяет массив
    value = [].concat(value); // Объединяет массив
    value = colorPallet.join('-'); // Преобразует в строку, разделяет по символьно
    value = 'Hello world'.split(' '); // Создает массив, разделяет по символьно

    console.log(colorPallet);
    console.log(value);
};

mainFunction();
