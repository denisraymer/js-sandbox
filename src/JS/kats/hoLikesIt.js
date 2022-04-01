function likes(names) {
    const userNamesLength = names.length;
    let likeMassage = null;

    if (userNamesLength === 0) {
        likeMassage = `no one likes this`
    } else if (userNamesLength === 1) {
        likeMassage = `${names[0]} likes this`
    } else if (userNamesLength === 2) {
        let first = names.slice(0,1).join('');
        let last = names.slice(1).join('');

        likeMassage = `${first} and ${last} like this`
    } else if (userNamesLength === 3) {
        let firstTwo = names.slice(0, 2).join(', ');
        let last = names.slice(2).join(' ');

        likeMassage = `${firstTwo} and ${last} like this`
    } else if (userNamesLength > 3) {
        let firstTwo = names.slice(0, 2).join(', ');
        let lastLength = names.slice(2).length;

        likeMassage = `${firstTwo} and ${lastLength} others like this`
    }

    return likeMassage
}

const result = likes(['Alex', 'Jacob']);

console.log(result);
