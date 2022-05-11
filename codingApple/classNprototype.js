
//class 문법 설명

// 구버전
function 기계(구멍) {
  this.q = 구멍;
  this.w = ;
}

var nunu = new 기계();
var garen = new 기계();



// es6 class 문법

// 상속(부모, 자식)

class Hero {
    constructor() {
        this.q = 구멍;
        this.w = 'snowball';
    }
}



// prototype (JS에만 있는 문법)

기계.prototype.name = 'kim'

console.log(nunu.name) // 'kim'

var 어레이 = [1,2,3];
var 어레이 = new Array(4,2,1);

어레이.sort() //기본함수들이 부모 유전자에 기록이 되어져 있음

Array.prototype.함수 = function () {}

