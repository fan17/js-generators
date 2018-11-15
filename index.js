function* getUsers() {
    const users = [
        {
            name: 'Andrew',
        },
        {
            name: 'Luke',
        },
        {
            name: 'Cristiano',
        },
    ];

    for (let i = 0; i < users.length; i++) {
        yield users[i];
    }
}

const userIterator = getUsers();

while (true) {
    const iterator = userIterator.next();
    if (iterator.done) {
        break;
    }
    const user = iterator.value;
    console.log(user.name);
}
