import React from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  // borderColor가 ?? 뒤에 있는 코드 실행
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? "white"}>
      {text}
    </Container>
  );
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
