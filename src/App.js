import React from 'react'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Components/Header/Header'
import {withSuspense} from './hoc/withSuspence'

const Graphs = React.lazy(() => import('./Pages/Graphic/GraphsContainer'))
const Entity = React.lazy(() => import('./Pages/Entity/EntityContainer'))

export const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Switch>
        <Route exact path='/' render={() => <p>Main page</p>} />
        <Route path='/entity' component={withSuspense(Entity)} />
        <Route path='/graphs' component={withSuspense(Graphs)} />
        <Route render={() => <p>Page not found</p>} />
      </Switch>
    </Router>
  )
}
