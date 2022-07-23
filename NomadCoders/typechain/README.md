### TS

- "include" : "src" 변경할 ts 폴더
- "target" : "ES6" 변경할 JS version
- ts -> js 변경 시, 대부분의 nodeJS와 브라우저가 es6를 지원하기 때문에 es6를 사용하는 것이 가장 이상적이다.
- "lib" : 합쳐진 라이브러리의 **정의 파일**을 특정해주는 역할, 자바스크립트 코드가 어디에서 동작할지를 알려준다. (자바스크립트의 어떤 버전이 그 환경에서 사용되는지)

```tsx
{
  "include": ["src"],
  "compilerOptions": {
    "outDir": "build",
    "target": "ES6",
    "lib": ["ES6", "DOM"]
  }
}

```

- lib에서 "DOM"을 지우면 타입스크립트는 브라우저를 위한 코드를 작성한다는 것을 모른다.
