import React from "react";
import axios from "axios";
import { RecoilRoot } from "recoil";
import Calendar from "./components/Calendar";

function App() {
  return (
    <RecoilRoot>
      <Calendar />
    </RecoilRoot>
  );
}

export default App;
