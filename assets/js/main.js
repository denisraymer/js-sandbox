function mainFunction() {
    // String
    const firstName = 'Denis';
    const lastName = 'Raymer';
    const age= '16';
    const str = 'Hello my name is Denis';

    let value;

    value = firstName + lastName;
    value = firstName + ' ' + lastName;
    // value = value + ' age ' + age;
    value += ' age ' + age;

    // Properties
    value = firstName.length;
    value = firstName[2];
    value = firstName[4];
    value = firstName[firstName.length - 1];
    value = lastName[lastName.length - 1];

    // Methods
    value = firstName.toUpperCase();
    value = firstName[4].toUpperCase();
    value = firstName.toLowerCase();
    value = firstName.concat(' ' + lastName);

    value = str.indexOf('n');
    value = str.indexOf('n', 6);
    value = str.includes('Denis'); // Поиск элемента в строке
    value = firstName.startsWith("Den"); // true, "Den" — начало "Denis"
    value = firstName.endsWith("is"); // true, "is" — окончание "is"

    value = str.slice(0, 5);
    value = str.slice(0, -3); // Удаляет с конца

    value = str.replace('Denis', 'Den'); // Заменяет элемент

    value = firstName.codePointAt(0); // Возвращает код для символа
    value = String.fromCodePoint(value); // Создаёт символ по его коду

    // Создание строки, содержащую символы с кодами от 65 до 220:
    for (let i = 65; i <= 220; i++) {
        value += String.fromCodePoint(i);
    }

    console.log(value);
    console.log(typeof value);
}

mainFunction();
