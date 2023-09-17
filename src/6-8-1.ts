type Option<T> = {
  tag: "some";
  value: T;
} | {
  tag: "none";
};

function isSome<T>(obj: Option<T>): obj is { tag: "some"; value: T } {
  return obj.tag === "some";
}

function showNumberIfExsts(obj: Option<number>) {
  if (isSome(obj)) {
    console.log(obj.value);
  }
}

const four: Option<number> = {
  tag: "some",
  value: 4,
};

const nothing: Option<number> = {
  tag: "none",
};

showNumberIfExsts(four); // => 4
showNumberIfExsts(nothing); // (何も表示されない)


function mapOption<T, U>(obj: Option<T>, callback: (value: T) => U): Option<U> {
  switch (obj.tag) {
    case "some":
      return {
        tag: "some",
        value: callback(obj.value)
      };
    case "none":
      return {
        tag: "none"
      }
  }
}

function doublecObject(obj: Option<number>) {
  return mapOption(obj, x => x * 2);
}

console.log(doublecObject(four));
console.log(doublecObject(nothing));