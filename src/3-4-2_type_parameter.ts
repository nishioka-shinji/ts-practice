type Family<Parent, Child> = {
  mother: Parent;
  father: Parent;
  child: Child;
};

const obj: Family<number, string> = {
  mother: 0,
  father: 100,
  child: "1000"
};

// 引数指定しないとエラー
// const obj: Family = {
//   mother: 0,
//   father: 100,
//   child: "1000"
// };

console.log(obj);
