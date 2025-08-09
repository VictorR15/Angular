export class Person {
  //   public name: string;
  //   private address: string;

  constructor(public name: string, private address: string) {
    this.name = name;
    this.address = address;
  }
}

export class Hero {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {}
}
const tony = new Person("tony", "NY");
const ironMan = new Hero("Iron Man", 45, "tony", tony);

console.log(ironMan);
