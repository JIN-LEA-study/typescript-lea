import React from "react";
import Greetings from "./Greetings";
import Counter from "./Counter";

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(name);
  };
  return <Counter />;
};

export default App;
