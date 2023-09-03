import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('文字列を入力: ', (line) => {
  const result = line + 1000;
  console.log(result);
  rl.close();
});
