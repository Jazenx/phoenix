import { COUNT } from '../../constants/ActionTypes'
import { produce } from 'immer'

const INIT_COUNT = 0

const count = produce((draft = INIT_COUNT, action: any) => {
  switch (action.type) {
    case COUNT.ADD_COUNT:
      return draft + 1
    default:
      return draft
  }
})

export default count
