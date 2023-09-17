// 関数宣言
function range(min: number, max: number): number[] {
  const result = [];
  for (let i = min; i < max; i++) {
    result.push(i);
  }
  return result;
}

console.log(range(5, 10));

// 関数式
type Human = {
  height: number;
  weight: number;
};
const calcBMI = function({ height, weight}: Human): number {
  return weight / height ** 2;
};
const uhyo: Human = { height: 1.84, weight: 72 };
console.log(calcBMI(uhyo));

// アロー関数式
const calcBMI2 = ({
  height, weight
}: Human): number => {
  return weight / height ** 2;
};
console.log(calcBMI2(uhyo));

// アロー関数式の省略形
const calcBMI3 = ({
  height, weight
}: Human): number => weight / height ** 2;
console.log(calcBMI3(uhyo));

// メソッド記法
const obj = {
  // メソッド記法
  double(num: number): number {
    return num * 2;
  },
  // 通常の記法 + アロー関数
  double2: (num: number): number => num * 2,
};

console.log(obj.double(100));
console.log(obj.double2(-50));