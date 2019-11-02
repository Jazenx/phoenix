import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'

export default function configureStore(initState = {}) {
  const sagaMiddleware = createSagaMiddleware()

  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const middlewares = [sagaMiddleware]

  const enhancers = composeEnhancers(
    applyMiddleware(...middlewares)
    // ... ohter enhancers
  )

  const store = createStore(rootReducer, initState, enhancers)

  sagaMiddleware.run(rootSaga)

  return store
}
