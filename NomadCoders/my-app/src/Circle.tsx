import { platform } from "os";
import React from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

interface CircleProps {
  bgColor: string;
}

function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}

export default Circle;

interface PlayerShape {
  name: string;
  age: number;
}

const sayHello = (palyerObj: PlayerShape) =>
  `Hello ${palyerObj.name} you are ${palyerObj.age} years old`;

sayHello({ name: "lea", age: 31 });
sayHello({ name: "lulu", age: 6 });
