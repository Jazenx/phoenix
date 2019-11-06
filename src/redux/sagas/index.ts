import { all } from 'redux-saga/effects'

import * as Count from './count'

export default function* rootSaga() {
  console.log('rootSaga')
  yield all([Count.count()])
}
