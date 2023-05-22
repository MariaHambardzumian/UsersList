
import { faker } from '@faker-js/faker';
import _ from 'lodash';

function createRandomUser() {
    return {
        name: faker.person.firstName(),
        email: faker.internet.email(),
        phone: faker.phone.number()
    };
}

const users = faker.helpers.multiple(createRandomUser, {
    count: 10,
});

const ordered = _.orderBy(users, (user) => user.name)

console.log(ordered);