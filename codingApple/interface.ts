//interface

type Square = { color: string; width: number };
let 네모: Square = { color: "red", width: 100 };

interface Square {
  color: string;
  width: number;
}

// Q

interface Student {
  name: string;
}
interface Teacher {
  name: string;
  age: number;
}

// === 위 아래 동일 코드

interface Student extends Student {
  age: number;
}

let 학생 = { name: "Kim" };
let 선생 = { name: "kim", age: 20 };

// & 기호 (intersection type)

type Anunak = { name: string };
type Cat = { age: number } & Animal; //두 타입 모두 만족해야 된다는 뜻

//
