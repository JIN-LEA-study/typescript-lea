"use strict";
function getNumber(value) {
    return value;
}
function getArray(value) {
    return value;
}
// 제네릭 기본 문법 - 함수
function getValue(value) {
    return value;
}
getValue('hi').toLocaleUpperCase();
getValue(100).toLocaleString();
const tony = { name: 'tony', age: 100 };
// 제네릭 타입 제한 - 구체적인 타입
function getNumberAndArray(value) {
    value.length; // X
    return value;
}
function getNumberAndArray(value) {
    value.length; // O
    return value;
}
function getAllowedOptions(option) {
    if (option === 'name' || option === 'address') {
        console.log('option type is string');
        return option;
    }
    if (option === 'price' || option === 'stock') {
        console.log('option type is number');
        return option;
    }
}
getAllowedOptions('nothing');
// const a = getAllowedOptions('name');
// a.toUpperCase(); // Name
