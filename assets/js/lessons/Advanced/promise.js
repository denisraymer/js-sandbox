// Advanced JavaScript

// Promise

const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        const backendData = {
            server: 'AWS',
            port: 2000,
            status: 'Working'
        }
        resolve(backendData);
    }, 2000);
});

promise.then(function (data) {
    data.modified = true;
    return data;
}).then(function (clientData) {
    clientData.fromPromise = true;
    return clientData;
}).catch(function (error) {
    console.log('Error: ', error);
}).finally(function () {
    console.log('Finally');
});

const promiseSleep = function (time) {
    return new Promise(resolve => {
        setTimeout(() => {
            const backendData = {
                server: 'AWS',
                port: 2000,
                status: 'Working'
            };

            resolve(backendData);
        }, time);
    });
};

promiseSleep(2000).then(data => console.log('Promises slip:', data));


// Метод all ожидает выполнения всех переданных в него функций
// и после этого выдает результат
Promise.all([promiseSleep(2000), promiseSleep(5000)]).then(() => {
    console.log('All promises');
});

// Метод race последовательно выполняет переданные в неё функции
Promise.race([promiseSleep(2000), promiseSleep(5000)]).then(() => {
    console.log('Race promises');
})
