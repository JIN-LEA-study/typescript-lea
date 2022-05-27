"use strict";
function logMessage(value) {
    console.log(value);
}
function logMessage(value) {
    console.log(value);
}
function logMessage(value) {
    console.log(value);
}
// # Union 타입 문법 - `any` 보다는 명시적임
function logMessage(value) {
    console.log(value);
}
function logMessage(value) {
    if (typeof value === 'string') {
        value.toLocaleUpperCase();
    }
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    throw new TypeError('value must be string or number');
}
function askSomeone(someone) {
    someone.name; // O
    someone.age; // X
}
