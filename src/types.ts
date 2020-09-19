export interface Person {
  id: string
  name: string
  lastName: string
}

export interface PersonMapping {
  [id: string]: Person
}
