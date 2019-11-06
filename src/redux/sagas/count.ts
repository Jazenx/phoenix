import { takeEvery } from 'redux-saga/effects'

import { COUNT } from '../../constants/ActionTypes'

function test() {
  console.log('saga: count + 1')
}

export function* count() {
  yield takeEvery(COUNT.ADD_COUNT, test)
}
