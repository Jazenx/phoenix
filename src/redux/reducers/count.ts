import { COUNT } from '../../constants/ActionTypes'

export default function count(state = 2, action: any) {
  switch (action.type) {
    case COUNT.ADD_COUNT:
      return state + action.count
    default:
      return state
  }
}
