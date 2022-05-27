"use strict";
// 이넘(Enum)
var Avengers;
(function (Avengers) {
    Avengers[Avengers["Capt"] = 0] = "Capt";
    Avengers[Avengers["Ironman"] = 1] = "Ironman";
    Avengers[Avengers["Hulk"] = 2] = "Hulk";
})(Avengers || (Avengers = {}));
const myHero = Avengers.Capt;
// any
let a = 'hi';
a = 20;
a = false;
// void
function sayHi() {
    // return 'a';
}
// 타입 추정 (type assertion)
let str = '이건 문자열 타입이 됩니다.';
let num;
num = 'str';
const divElement = document.querySelector('#app');
divElement.innerHTML;
// const empty = document.querySelector('#app') as null;
// empty.innerHTML;
