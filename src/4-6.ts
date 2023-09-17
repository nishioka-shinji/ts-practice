function getFizzBuzzMessage(i: number): string {
  if (i % 3 === 0 && i % 5 === 0 ) {
    return 'FizzBuzz';
  } else if (i % 3 === 0) {
    return 'Fizz';
  } else if (i % 5 === 0) {
    return 'Buzz';
  } else {
    return String(i);
  }
}

function sequence(start: number, end: number): number[] {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

for (const i of sequence(1, 100)) {
  const message = getFizzBuzzMessage(i);
  console.log(message);
}

function map<T, U>(array: T[], callback: (value: T) => U): U[] {
  const result: U[] = [];
  for (const elm of array) {
    result.push(callback(elm));
  }
  return result;
}

const data = [1, 1, 2, 3, 5, 8, 13];
const result = map(data, (x) => x * 10);
console.log(result);