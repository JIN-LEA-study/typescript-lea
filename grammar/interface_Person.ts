interface Person {
  name: string;
  age?: number;
}

interface Developer {
  name: string;
  age?: number;
  skills: string[];
}

/**
 * interface가 겹칠 경우엔 상속할 수 있다.
 */

// interface
interface Developer2 extends Person {
  skills: string[];
}

// type
type Developer3 = Person & {
  skills: string[];
};

const person: Person = {
  name: "lea",
  age: 20,
};

const person2: Person = {
  name: "lea",
  skills: "react", //err
};

const expert: Developer = {
  name: "lea",
  skills: ["react", "JS", "TS"],
};

type People = Person[];
const people: People = [person, expert];

type Color = "red" | "orage" | "yellow";

const color2: Color = "red";
const color: Color = "green"; //err
