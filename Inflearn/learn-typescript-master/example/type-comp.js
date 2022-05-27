"use strict";
var a;
var b;
// a = b; // X
b = a; // O
// 함수
var add = function (a) {
    // ...
};
var sum = function (a, b) {
    // ...
};
// sum = add; // X
// add = sum; // O
// // 유니온 타입
// var c: Developer | Person;
// var d: Person | string;
// c = d;
// d = c;
