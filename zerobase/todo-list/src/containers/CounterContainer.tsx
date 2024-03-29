import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase, increaseBy } from "../modules/counter";
import { RootState } from "../modules/index";

function CounterContainer() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };

  return (
    <Counter
      count={count}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseBy={onIncreaseBy}
    ></Counter>
  );
}

export default CounterContainer;
