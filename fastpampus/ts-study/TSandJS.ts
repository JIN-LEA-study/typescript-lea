// TS and JS

// TS : Static Types 개발하는 중간에 타입을 체크
// JS : Dynamic Types run time에서 알 수 있음

// JS

function add(n1, n2) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("Incorrect input!");
  }
  return n1 + n2;
}

const result = add(39, 28);

// TS

function add(n1: number, n2: number) {
  return n1 + n2;
}
const result = add(39, 28);

// JS이 표준에 따른 기본 자료형 Boolean, Number, String, Null, Undefined, Symbol, Array: object형
// and 프로그래밍을 도울 타입 추가(안정성) Any, Void, Never, Unknown, Enum, Tuple: object형
