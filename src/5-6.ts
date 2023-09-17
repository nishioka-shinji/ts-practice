class User {
  readonly #name: string;
  readonly #age: number;

  constructor(name: string, age: number) {
    if (name === "") {
      throw new Error("ユーザーには名前が必要です");
    }

    this.#name = name;
    this.#age = age;
  }

  getMessage(message: string): string {
    return `${this.#name}さん (${this.#age}) 「${message}」`;
  }
}

const uhyo = new User("uhyo", 30);
console.log(uhyo.getMessage("こんにちは"));