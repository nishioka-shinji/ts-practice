const obj = {
  str: 'helllo, world',
  num: 1234
};

const { str } = obj;
console.log(str);

const nested = {
  num: 123,
  obj: {
    str: 'helllo',
    num: 'world'
  }
}
const { name, obj: { str } } = { nested }