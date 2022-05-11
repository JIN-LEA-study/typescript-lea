<h3>TypeScript</h3>

<b>Todo list</b>

- [o] 타입스크립트를 쓰는 이유, 필수 문법
- [o] 타입스크립트 기본 타입 정리
- [o] 타입을 미리 정하기 애매할 때 (union type, any, unkonwn)

<b>study</b>

- tsc -w : ts -> js 변환
- TS는 알아서 타입을 지정하고 씌워줌 (미리 타입을 알려줌)
- Union Type : 2가지 이상의 타입을 합친 새로운 타입
- any Type : 모든 자료형을 허용
- unknown Type : 모든 자료형 허용, any 보다 안전
- 간단한 수학연산도 타입이 맞아야 함
- 함수 파라미터 (숫자 input 역할)
- 함수에도 type 지정이 가능, type 지정을 안해주면 any
- return 값의 type 지정 가능
- void : 함수에서만 사용 가능한 특별한 type, return 막아줌
- 타입이 지정된 TS는 파라미터를 필수로 적어야됨
- 파라미터가 옵션일 경우엔 파라미터에 ?(들어올 수도 있다 === undefined)를 넣어준다.
