// typesafe-actions 사용 후 코드 1

import { action, ActionType, createReducer } from "typesafe-actions";
import { createStandardAction } from "typesafe-actions/dist/deprecated/create-standard-action";

const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;
const INCREASE_BY = "counter/INCREASE_BY " as const;

type CounterState = {
  count: number;
};

//기본 초기값 설정
const initialState: CounterState = {
  count: 0,
};

// const INCREASE = "counter/INCREASE" as const;
export const increase = createStandardAction(INCREASE)();
export const decrease = createStandardAction(DECREASE)();
// export const increaseBy = (diff: number) => ({
//   type: INCREASE_BY,
//   payload: diff,
// });
export const increaseBy = createStandardAction(INCREASE_BY)<number>();

// type CounterAction =
//   //ReturnType을 가져오면 함수의 결과물을 가져올 수 있다.
//   | ReturnType<typeof increase>
//   | ReturnType<typeof decrease>
//   | ReturnType<typeof increaseBy>;

const actions = { increase, decrease, increaseBy };
type CounterAction = ActionType<typeof actions>;

// function counter(
//   state: CounterState = initailState,
//   action: CounterAction
// ): CounterState {
//   switch (action.type) {
//     case INCREASE:
//       return { count: state.count + 1 };
//     case DECREASE:
//       return { count: state.count - 1 };
//     case INCREASE_BY:
//       return { count: state.count + action.payload };
//     default:
//       return state;
//   }
// }

const counter = createReducer<CounterState, CounterAction>(initialState, {
  [INCREASE]: (state) => ({ count: state.count + 1 }),
  [DECREASE]: (state) => ({ count: state.count - 1 }),
  [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload }),
});

export default counter;
