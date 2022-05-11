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
// 엄격하게 코드 짜는 방법
function 함수5(x) {
    if (typeof x === "string") {
        return x + "1";
    }
    else {
        return x + 1;
    }
}
함수5(3);
// typeof
function 내함수(x) {
    let array = [];
    if (typeof x === "number") {
        array[0] = x;
    }
    else {
    }
}
내함수(123);
// assertion (as)
function 내함수2(x) {
    let array = [];
    array[0] = x;
}
let 동물 = "kim";
let 동물2 = { name: "kim", age: 20 };
// 재할당은 불가하지만 오브젝트 수정은 가능
const 출생지역 = { region: "seoul" };
출생지역.region = "busan"; //변경가능
const 여친 = {
    name: "엠버",
};
여친.name = "유라"; // 에러
let position = { x: 10, y: 20 };
// Literal types 더 엄격한 타입지정 가능
let 이름3; // 123이라는 숫자만 들어올 수 있음
let 접니다;
접니다 = "대머리"; // 에러안남
접니다 = "솔로"; // 에러안남
function 함수당(a) { }
함수당("hello");
function 엄격한함수(a) {
    return 1;
}
엄격한함수("hello");
// 가위바위보만 쓸 수 있고, 리턴할 수 있는 함수
function 가위바위보함수(a) {
    return ["가위"];
}
가위바위보함수("가위");
