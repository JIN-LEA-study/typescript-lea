

## TS 사용하면 좋은 점

```ts
// 미리 에러를 방지할 수 있다
function add (a: number, b: number): number {
  return a + b;
}

add(10, '20'); //error
```

```ts
// 코드 가이드, 자동 완성
function add (a: number, b: number): number {
  return a + b;
}

let result = add(10, '20');
result.toLocaleString(); // 제공하는 API들을 바로바로 볼 수 있다.
```
