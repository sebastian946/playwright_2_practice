const{faker} = require('@faker-js/faker');

export function name(){
    return faker.person.fullName();
}
export function username(){
    return faker.internet.userName(faker.person.firstName(),faker.person.lastName());
}
export function password(){
    return faker.internet.password();
}
export function country(){
    return faker.location.country();
}
export function city(){
    return faker.location.city();
}
export function card(){
    return faker.finance.creditCardNumber();
}
export function month(){
    return faker.date.month();
}
export function year(){
    return "2024";
}