// Primitive Types

// 실제 값을 저장하는 자료형
// blooean, number, string, symbol(ES2015), null, undefined

let name = "mark";
name.toString();

// Type Casing
// Ts의 핵심은 primitive types은 모두 소문자 입니다.

// ex

function reverse(s: string): string {
  return s.split("").reverse().join("");
}

reverse("hello world");
