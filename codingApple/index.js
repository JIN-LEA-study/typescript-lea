"use strict";
// 무조건 string 타입만 들어올 수 있음
let 이름 = "kim";
let 나이 = 50;
let 결혼했니 = null;
let 결혼했니2 = undefined;
//array 자료형
let 회원들 = ["kim", "park"];
let 회원들2 = [1, 2];
// 변수 하나에 여러자료를 집어 넣고 싶을 땐, object 자료형으로 사용가능
let 회원들3 = { member1: "kim", member2: "park" };
// 타입 제한
let 회원들4 = {
    member1: "kim",
    member2: "park",
};
// 여러가지 타입을 넣고 싶을 때 (Union Type)
let 회원들5 = 123;
회원들5 = 123;
// array 안에 여러가지 타입 넣고 싶을 때
let 회원들6 = [1, "2", 3];
let 회원들7 = { a: "123" };
// 귀찮을 때 (any) - 타입실드 해제문법
let 이름1;
이름1 = 123;
이름1 = [];
// unknown Type
let 이름2;
이름2 = 123;
이름2 = [];
let 변수 = 이름2; //TS쉴드 가능
// string + 1
let 나이2;
나이2 + 1;
// string type + 1 (허용)
// number type + 1 (허용)
// string | number + 1 (union type 비허용)
let 나이3 = 1;
나이3 = 1; //불가
// function
function 함수(x) {
    return x * 2;
}
함수(30);
// void (return 쓰기 싫은 함수에 씀, return 막아줌)
function 함수2(x) {
    1 + 1;
}
함수2(2);
// 파라미터가 옵션인 경우
function 함수3(x) { }
함수3();
// 같은 예시 (아래 위 동일한 코드)
function 함수4(x) { }
함수4(5);
