
## interface

```ts
interface User {
  age: number;
  name: string;
}
```

### 변수에 인터페이스 활용
```ts

let lea: User = {
  age: 33,
  name: 'lea'
}
```

### 함수에 인터페이스 활용
```ts
function getUser(user: User) {
  console.log(user);
}

// name뿐만 아니라 age까지 담고 있어야 한다
const capt = {
  name: '캡틴',
  age: 100
}
getUser(capt);
```

### 함수의 스펙(구조)에 인터페이스 활용
```ts
interface SumFunction {
  (a: number, b: number): number; //반환 타입까지 정의를 할 수 있다
}

let sum: SumFunction;
sum = function(a: numver, b: number): number {
  return a + b;
}
```

### 인덱싱
```ts
// 인덱싱 타입도 정의할 수 있다
interface StringArray {
  [index: number]: string;
}

let arr:StringArray = ['a', 'b', 'c']
arr[0]; // 'a'
```

### 딕셔너리 패턴
```ts
//RegExp : 정규표현식
interface StringRegexDictionary {
  [key: stirng]: RegExp;
}

let obj: StringRegexDictionary = {
  sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}

obj['cssFile'] = 'a' // error, RegExp를 접근해달라는 메세지가 뜸

object.keys(obj).forEach(function(value){

})

```
