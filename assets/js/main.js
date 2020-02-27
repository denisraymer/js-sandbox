function mainFunction() {
    // Template string
    const firstName = 'Denis';
    const lastName = 'Raymer';
    const age = '16';

    let str;

    str = 'Hello my name is' + firstName + ' ' + lastName;

    str = '<ul>' +
        '<li>' + 'First name' + firstName + '</li>' +
        '<li>' + 'Last name' + lastName + '</li>' +
        '<li>' + 'Age' + age + '</li>' +
    '</ul>';

    // ES6
    str = `<ul>
        <li>First name: ${firstName}</li>
        <li>Last name: ${lastName}</li>
        <li>Age: ${age}</li>
    </ul>`;

    document.getElementById('root').innerHTML = str;
}

mainFunction();
