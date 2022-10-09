/**
 * Type Inference
 */
let text = "hello";
let text2: string = "hello";
text = 11; //err
text = "11";

function print(message = "hello") {
  console.log(message);
}
print("hello");
print(1); //err

function add(x: number, y: number): number {
  return x + y;
}
const result: number = add(1, 2);

/**
프로젝트에서는 보통 간단하게 코드를 작성하지 않기 때문에
웬만하면 타입을 명확하게 작성하는 것이 좋다.
 */
