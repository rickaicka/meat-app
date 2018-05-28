export class User{
  constructor(public email: string, public name: string, private password: string){}


  matches(another: User): boolean{
    return another !== undefined && another.email === this.email && another.password === this.password
  }
}

export const users: {[key: string]: User} = {
  "ricardo@gmail.com": new User("ricardo@gmail.com", "Ricardo Salim", '123456'),
  "rafael@gmail.com": new User("rafael@gmail.com", "Rafael Salim", '123456')
}
