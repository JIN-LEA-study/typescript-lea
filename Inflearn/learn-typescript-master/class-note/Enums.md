

## 이넘 Enums

특정 값들의 집합을 의미하는 자료형

```
나이키
아디다스
뉴발란스
```

타입스크립트는 문자형 이넘과 숫자형 이넘을 지원

### 숫자형 이넘

```ts
enum Shoes {
  Nike,
  Adidas,
  Sth,
}

let myShose = Shoes.Nike;
console.log(myShose); // 0

let myShose = Shoes.Adidas;
console.log(myShose); // 1

```


```ts
// 숫자를 별도로 부여할 경우

enum Shoes {
  Nike = 10,
  Adidas
}
let myShose = Shoes.Nike;
console.log(myShose); // 10

let myShose = Shoes.Adidas;
console.log(myShose); // 11

```

### 문자형 이넘

```ts
enum Shoes {
  Nike = '나이키',
  Adidas = '아디다스'
}

let myShoes = Shoes.Nike;
console.log(myShoese); // '나이키'
```

