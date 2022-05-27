"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function Greetings({ name, mark, optional, onClick }) {
    const handleClick = () => onClick(name);
    return (<div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click me</button>
      </div>
    </div>);
}
Greetings.defaultProps = {
    mark: "!",
};
exports.default = Greetings;
