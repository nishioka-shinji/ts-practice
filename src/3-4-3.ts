type HasName = {
  name: string;
}

type Family<Parent extends HasName, Child extends HasName> = {
  mother: Parent;
  father: Parent;
  child: Child;
}

// エラー
// type T = Family<number, string>

type Animal = {
  name: string;
}

type Human = {
  name: string;
  age: number;
}

type T = Family<Animal, Human>