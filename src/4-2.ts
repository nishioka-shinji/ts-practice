type F = (repeat: number) => string;
const xRepeat: F = (num: number): string => "x".repeat(num);

// error
// type F2 = (arg: string, arg2: string) => boolean;
// const fun: F2 = (num: number): void => console.log(num);