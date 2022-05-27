"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Counter_1 = __importDefault(require("./Counter"));
const App = () => {
    const onClick = (name) => {
        console.log(name);
    };
    return <Counter_1.default />;
};
exports.default = App;
