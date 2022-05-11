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
