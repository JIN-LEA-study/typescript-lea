"use strict";
// 자바스크립트 함수 선언
function sum(a, b) {
    return a + b;
}
// 타입스크립트 함수 선언 - 함수의 매개 변수
function add(a, b) {
    return a + b;
}
// 타입스크립트 함수 선언 - 함수의 반환 타입
function add(a, b) {
    return a + b;
}
// function add(a: number, b: number): string {
//   return a + b;
// }
// 함수 인자
function log(a) {
    console.log(a);
}
log('a', 10);
// 함수 옵셔널 파라미터(optional parameter)
function printText(text, type) {
    console.log(text);
}
printText('hi');
