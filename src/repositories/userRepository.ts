import { UserEntity } from '../entities/UserEntity'

interface UserRepository {
  fetch: () => Promise<UserEntity>
}

/**
 * user stateに関わる非同期関数を定義する部屋
 */
export const userRepository: UserRepository = {
  fetch: async () => {
    // 3秒後に適当なUserを返す
    return await new Promise<UserEntity>(resolve => setTimeout(() => {
      resolve({
        id: 1,
        name: 'ceris',
        age: 26
      })
    }, 3000))
  }
}
