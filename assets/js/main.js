function mainFunction() {
    // Object
    const user = {
        firstName: 'Denis',
        age: '18',
        isAdmin: true,
        email: 'test@gmail.com',
        'user-address': {
            city: 'Moscow'
        },
        skills: ['Python', 'C++', 'C#']
    };

    let value;
    let prop = 'skills';

    value = user.firstName;
    value = user['isAdmin'];
    value = user['user-address'];
    value = user['user-address'].city;
    value = user['user-address']['city'];
    value = user['skills'][1];

    value = user.firstName = 'Den';
    value = user.info = 'Some info';

    value = user['user-address'].city = 'SPB';
    value = user['user-address'].country = 'Russia';

    console.log(value);
    console.log(user);
}

mainFunction();
