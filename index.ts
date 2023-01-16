// 方法①
type hogeType = {
  [key: string]: number;
};
const hoge: hogeType = {};

for (let i = 0; i < 20; i++) {
  hoge[i.toString()] = i;
}

console.log(hoge);

// 方法②
type fugaType = Record<string, number>;
const fuga: fugaType = {};

for (let i = 0; i < 20; i++) {
  fuga[i.toString()] = i;
}

console.log(fuga);

type fooType = Record<string, NodeJS.Timeout>;
const foo: fooType = {};

for (let i = 0; i < 20; i++) {
  foo[i.toString()] = setTimeout(() => {
    console.log(i);
  }, 10);
}

console.log(foo);
