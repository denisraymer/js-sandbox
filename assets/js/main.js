const mainFunction = function () {
    // This. Контекст вызова функции
    let colorPallet = ['Black', 'Blue', 'Green', 'Yellow', 'Pink', 'Purple'];
    let value;

    function getPrice(currency = '$') {
        console.log(`${currency} ${this.price}`);
        return this
    }

    const productList = {
        name: 'Intel',
        price: 100,
        info: {
            information: ['Product 00', 'Product 01'],
            getInfo: function () {
                return this
            }
        },
        getName() {
            return this.name
        },
        getPrice
    };

    value = productList.info.getInfo();
    value = productList.getName();
    // value = productList.getPrice();

    // Вызов в контексте объекта (productList)
    // getPrice.call(productList, '$');
    // Принимает аргументы передаваемы в функцию в качестве массива
    // getPrice.apply(productList, ['%']);

    const getPriceBind = productList.getPrice.bind(productList, '#');

    value = setTimeout(getPriceBind, 1000);

    return value
};

mainFunction();
