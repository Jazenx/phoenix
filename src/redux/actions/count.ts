import { COUNT } from '../../constants/ActionTypes'

export const addCount = (count: number) => ({
  type: COUNT.ADD_COUNT,
  count
})
