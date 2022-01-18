export interface UserProps {
  id: number
  name: string
  age: number
}

export const initialState = {
  id: 0,
  name: '',
  age: 0
}

export class UserEntity {
  readonly id: number
  readonly name: string
  readonly age: number

  constructor(props: UserProps = initialState) {
    const { id, name, age } = props
    this.id = id
    this.name = name
    this.age = age
  }
}