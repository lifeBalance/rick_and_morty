import { instance } from './base'

export const characters = {
  getAll: (page: number = 1) =>
    instance.get('/character', {
      params: {
        page: page,
      },
    }),
}
