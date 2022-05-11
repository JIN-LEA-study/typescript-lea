<h3>TypeScript</h3>

<b>Todo list</b>

part 1 : 꼭 알아야 할 내용

- [o] 타입스크립트를 쓰는 이유, 필수 문법
- [o] 타입스크립트 기본 타입 정리
- [o] 타입을 미리 정하기 애매할 때 (union type, any, unkonwn)
- [o] 함수에 타입을 지정하는 방법, void
- [o] 타입 확정하기 Narrowing, Assertion
- [o] 타입도 변수에 담아 쓰세요. type 키워드 써서, readonly
- [o] literal types로 만드는 const 변수 유사품
- [o] 함수와 methods에 type alias 지정하는 법
- [o] 타입스크립트로 HTML 변경과 조작할 때 주의점
- [o] class 키워드 알아보기
- [o] prototype 문법 짚어보기
- [] class 만들 때 타입 지정 가능
- [] object에 타입 지정하려면 interface 사용

part 2 : 알면 도움은 되는 내용

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
- Type Narrowing : typeof 연산자를 사용
- if문을 썼으면 끝까지 써야 안전하다. else, else if 안쓰면 에러가 뜰 수도 있음
- assertion (as) : x as number -> 왼쪽에 있는 변수에 number로 덮어서 써줭 (number로 인식) but 버그 추적 불가
- assertion (as) : 1. Narrowiong 할 때 사용(복잡한 여러 타입이 있을 경우 사용) 2. 어떤 타입이 들어올지 100% 확실하게 알고 있을 때 사용
- type alias : 타입 변수, 변수로 타입을 만들어서 사용, type alias 작명은 대문자로 시작하는게 국롤 (일반 변수와 차별화) or 영어대문자+type
- const : const로 담은 object는 수정이 자유롭게 가능, - readonly : const 자료 수정도 막을 수 있음 but 실제 변환된 js 파일에는 에러가 없음. TS 에러는 에디터와 터미널에서만 존재
- extend 하기 : type 합치기
- 같은 이름의 type 변수는 재정의가 불가능 (엄격)
- Literal types : 정해진 문자만 들어올 수 있음 (엄결)
- as const : 효과1 object value값을 그대로 타입으로 지정, 효과2 object 속성들에 모두 readonly 붙여줌
- 함수는 예측 가능한 값을 넣어야 함
- 태그마다 Elemnet가 정해져 있음 (ex: button : HTMLButtonElement, h1 : HTMLHeadingElement)
- class : obj 뽑는 기계
- prototype : 유전자
- prototype에 무언가를 추가하면 자식들이 사용이 가능. console.log를 통해 찍어볼 수 있다.
