// 무조건 string 타입만 들어올 수 있음
let 이름: string = "kim";
let 나이: number = 50;
let 결혼했니: null = null;
let 결혼했니2: undefined = undefined;

//array 자료형
let 회원들: string[] = ["kim", "park"];
let 회원들2: number[] = [1, 2];

// 변수 하나에 여러자료를 집어 넣고 싶을 땐, object 자료형으로 사용가능
let 회원들3 = { member1: "kim", member2: "park" };

// 타입 제한
let 회원들4: { member1: string; member2: string } = {
  member1: "kim",
  member2: "park",
};

// 여러가지 타입을 넣고 싶을 때 (Union Type)

let 회원들5: number | string = 123;
회원들5 = 123;

// array 안에 여러가지 타입 넣고 싶을 때

let 회원들6: (number | string)[] = [1, "2", 3];
let 회원들7: { a: string | number } = { a: "123" };

// 귀찮을 때 (any)

let 이름1: any;
이름1 = 123;
이름1 = [];
