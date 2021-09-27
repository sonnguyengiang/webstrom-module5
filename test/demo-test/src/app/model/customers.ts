export class Customers {
  name?: string;
  age?: number;
  address?: string;
  gender?: string;
  avatar?: string;


  constructor(name: string, age: number, address: string, gender: string, avatar: string) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.gender = gender;
    this.avatar = avatar;
  }
}
