import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Loading from '../components/Loading'

interface IRoutes {
  path: string
  key: string
  exact: boolean
  component: React.FC
}

const AsyncHomeView = lazy(() =>
  import(/* webpackChunkName: "home" */ '../views/home')
)

const AsyncCountView = lazy(() =>
  import(/* webpackChunkName: "home" */ '../views/count')
)

const routes: IRoutes[] = [
  {
    path: '/',
    key: 'home',
    exact: true,
    component: AsyncHomeView
  },
  {
    path: '/count',
    key: 'count',
    exact: true,
    component: AsyncCountView
  }
]

const AppRouter = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Switch>
        {routes.map(router => (
          <Route
            key={router.key}
            exact={router.exact}
            path={router.path}
            component={router.component}
          />
        ))}
      </Switch>
    </Suspense>
  </BrowserRouter>
)

export default AppRouter
