import React from "react";
import "./App.css";
import TodoApp from "./containers/TodoApp";
import CounterContainer from "./containers/CounterContainer";

const App: React.FC = () => {
  return (
    <>
      <TodoApp />
      <CounterContainer />
    </>
  );
};

export default App;
