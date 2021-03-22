const users = [
  {
    name: 'Peter Parker', email: 'marvel@marvel.com'
  },
  {
    name: 'Bruce Wayne', email: 'dc@dc.com'
  }
]

export class User {
  static findAll(): Promise<any[]>{
    return Promise.resolve(users)
  }
}