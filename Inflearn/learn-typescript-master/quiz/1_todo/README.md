
## TODO LIST with TypeScript

### study note
- any: 치트키, number / string / array ... 모든 타입을 다 통칭!
- 처음 타입을 정의 할 때는 any를 먼저 지정하고 구체적으로 타입을 하나씩 고쳐나가면 된다
- void: return값이 없는 경우
- filter() : 배열 중 특정 조건인 아이템 가져옴

```js
let arr = [
  {gender: 'male', name: 'devin'},
  {gender: 'female', name: 'lea'},
  {gender: 'male', name: 'lulu'},
]

const filtered = arr.filter(function(item) {
  if (item.gender === 'female') {
    return item;
  }
})

console.log(filtered); //[{gender: 'female', name:'lea'}]
```