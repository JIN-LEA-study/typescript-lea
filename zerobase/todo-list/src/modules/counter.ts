const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;
const INCREASE_BY = "counter/INCREASE_BY " as const;

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff,
});

type CounterState = {
  count: number;
};

//기본 초기값 설정
const initailState: CounterState = {
  count: 0,
};

type CounterAction =
  //ReturnType을 가져오면 함수의 결과물을 가져올 수 있다.
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;

function counter(
  state: CounterState = initailState,
  action: CounterAction
): CounterState {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default counter;
