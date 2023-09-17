type PriceData = {
  [key: string]: number;
};

const data: PriceData = {
  apple: 220,
  coffee: 120,
  bento: 500
};

data.chicken = 250;
// data.bento = "foo"; コンパイルエラー

console.log(data);


// インデックスシグネチャはどんな名前のプロパティでもアクセス可能なため、undefinedが出力される
console.log(data.fish);