### TypeSript를 이용한 TodoList

- typesafe-aciton : 리덕스를 사용하는 프로젝트에서 액션 생성 함수와 리듀서를 훨씬 쉽고 깔끔하게 작성 할 수 있게 해주는 라이브러리

```tsx
const add = createStandardAction("ADD")<number>();
add(10);
```

```tsx
{type: 'ADD', payloard: number}
```

- typesafe-aciton 사용하는 두번째 방법

```tsx
// typesafe-actions 사용 후 코드 2
const counter = createReducer<CounterState, CounterAction>(initialState)
  .handleAction(INCREASE, (state) => ({ count: state.count + 1 }))
  .handleAction(DECREASE, (state) => ({ count: state.count - 1 }))
  .handleAction(INCREASE_BY, (state, action) => ({
    count: state.count + action.payload,
  }));
```

```tsx
//action 함수를 그냥 넣어줘도 작동한다.

// 변경 전
// const INCREASE = "counter/INCREASE";
// const DECREASE = "counter/DECREASE";
// const INCREASE_BY = "counter/INCREASE_BY"t;

// 변경 후 (코드가 더 명확하고 깔끔하다)

export const increase = createStandardAction("counter/INCREASE")();
export const decrease = createStandardAction("counter/DECREASE")();
export const increaseBy = createStandardAction("counter/INCREASE_BY")<number>();

const counter = createReducer<CounterState, CounterAction>(initialState)
  .handleAction(INCREASE, (state) => ({ count: state.count + 1 }))
  .handleAction(DECREASE, (state) => ({ count: state.count - 1 }))
  .handleAction(INCREASE_BY, (state, action) => ({
    count: state.count + action.payload,
  }));
```

- typesafe-actions 리팩토링

```tsx
function todos(
  state: TodosState = initialState,
  action: TodosAction
): TodosState {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        // action.payload 객체 안의 값이 모두 유추됩니다.
        id: action.payload.id,
        text: action.payload.text,
        done: false,
      });
    case TOGGLE_TODO:
      return state.map((todo) =>
        // payload 가 number 인 것이 유추됩니다.
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case REMOVE_TODO:
      // payload 가 number 인 것이 유추됩니다.
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}
```

```tsx
const todos = createReducer<TodosState, TodosAction>(initialState, {
  [ADD_TODO]: (state, action) =>
    state.concat({
      ...action.payload,
      done: false,
    }),
  [TOGGLE_TODO]: (state, action) =>
    state.map((todo) =>
      todo.id === action.payload ? { ...todo, done: !todo.done } : todo
    ),
  [REMOVE_TODO]: (state, action) =>
    state.filter((todo) => todo.id !== action.payload),
});
```
