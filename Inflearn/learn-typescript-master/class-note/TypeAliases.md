
## 타입 별칭 Type Aliases

타입 별칭은 특정 타입이나 인터페이스를 참조할 수 있는 타입 변수를 의미한다.
- 새로운 타입을 생성하는게 아니라 정의 된 타입을 쉽게 참고 할 수 있게 이름을 부여

```ts
//string 타입을 사용할 때
const name: string = 'lea';

//타입 별칭을 사용할 때
type MyName = string;
const name: Myname = 'lea';
```

`interface` 레벨의 복잡한 타입에도 별칭을 부여할 수 있다.

```ts
type Developer = {
  name: string;
  skill: string;
}
```

타입 별칭에 `제네릭`도 사용할 수 있다

```ts
type User<T> = {
  name: T
}
```

## 타입 별칭 예제

```ts
interface Person {
  name: string;
  age: number;
}

// interface를 이용한 타입 정의
let lea: Person = {
  name: '레아',
  age: 30
}
```

```ts
type Person = {
  name: string;
  age: number;
}

// Type Aliases를 이용한 타입 정의, 타입의 모습을 바로 볼 수 있다
let lea: Person = {
  name: '레아',
  age: 30
}

```

```ts
type MyString = string;
let str: MyString = 'hello';
```
```ts
type Todo = {id: string; title: string; done: boolean};
function getTodo{todo: Todo} {

};
```

### Interface, Type Aliases 차이점

- `Interface`로 선언한 경우 프리뷰로 확인하면 선언된 `인터페이스 변수`가 보여짐
- `Type Aliases`로 선언한 경우 프리뷰로 확인하면 `객체에 대한 타입`이 보여짐
- `Type Aliases`는 타입 확장이 안됨
- 좋은 소프트웨어는 언제나 확장이 용이해야 한다는 원칙에 따라 가급적 확장 가능한 `인터페이스`로 선언하는 것이 좋음