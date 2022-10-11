function merge<A, B>(a: A, b: B) {
  return {
    ...a,
    ...b,
  };
}

const merged = merge({ foo: 1 }, { bar: 2 });

merged.bar;
merged.foo;

/**
any를 사용하게 되면 값이 any가 되기 때문에
generics를 사용하게 되면 타입이 지켜지면서 타입을 알 수 있다.
 */

function wrap<T>(param: T) {
  return {
    param,
  };
}

const wrapped = wrap(10);

wrapped.param;

interface Items<T> {
  list: T[];
}

//interface

const items: Items<string> = {
  list: ["a", "b", "c"],
};

const items2: Items<number> = {
  list: ["a", "b", "c"], //err
};

//type

type Items2<T, V> = {
  list: T[];
  value: V;
};

const items3: Items2<number, string> = {
  list: [1, 2, 3],
  value: "aaaa",
};
