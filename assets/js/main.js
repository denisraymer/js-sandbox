function mainFunction() {
    let value;

    // Number to string
    value = String(12);
    value = (12).toString();

    // String to number
    value = Number(value);

    // Array to string
    value = String([1, 2, 3, 4]);

    // Object to string
    value = String({ name: 'Egor' });

    value = 30 + '' + undefined;
    value = 30 + '5';
    value = 30 - '5';
    value = false + undefined;

    // NUmber to string
    value = Number('12');
    value = Number(true);
    value = Number(false);
    value = Number(null);
    value = Number('false');
    value = Number([1, 2, 3]);

    value = parseInt('200px');
    value = parseFloat('200.50px');

    // Boolean
    value = Boolean('Hello');
    value = Boolean('');
    value = Boolean(100);
    value = Boolean(0);
    value = Boolean(undefined);
    value = Boolean(null);
    value = Boolean({});
    value = Boolean([]);

    console.log(value);
    console.log(typeof value);
}

mainFunction();
