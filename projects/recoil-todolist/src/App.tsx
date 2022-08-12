import React from "react";
import { atom, selector, useRecoilValue } from "recoil";
import axios from "axios";
import { RecoilRoot } from "recoil";
import Calender from "./components/Calender";

const todoIdState = atom({
  key: "todoIdState",
  default: 1,
});

const todoItemQuery = selector({
  key: "todoItemQuery",
  get: async ({ get }) => {
    const id = get(todoIdState);

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    return response.data;
  },
});

function App() {
  return (
    <RecoilRoot>
      <Calender />
    </RecoilRoot>
  );
}

export default App;
