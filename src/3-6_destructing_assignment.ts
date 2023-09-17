const nested = {
  num: 123,
  obj: {
    foo: 'helllo',
    num: 'world'
  }
}
const { num, obj: { foo } } = nested
console.log(num);
console.log(foo);