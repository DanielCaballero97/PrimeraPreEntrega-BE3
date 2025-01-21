import { fakerES as faker } from "@faker-js/faker";

export const generateUser = () => {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    age:faker.number.int({min:18 , max:80}),
    password: "coder123",
    role: faker.helpers.arrayElement(['admin', 'user']),
  };
};

export const generatePets = () => {
  return{
    firstName: faker.animal.petName(),
    age:faker.number.int({min:0 , max:15}),
  };
};
