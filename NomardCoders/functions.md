### Call signatures

- 함수의 타입과 함수의 반환 타입이 아니라 인자(Arguments)의 타입이랑 함수의 반환 타입을 알려준다.

```tsx
type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;
const add: Add = (a, b) => {
  a + b;
}; //err
```

- 프로그램을 디자인하면서 타입을 먼저 생각하고 코드를 구현해야 한다.
