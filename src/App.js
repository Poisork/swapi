import React from 'react'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './Components/Header/Header'
import {withSuspense} from './hoc/withSuspence'

const Graphic = React.lazy(() => import('./Pages/Graphic/Graphic'))
const People = React.lazy(() => import('./Pages/People/PeopleContainer'))

export const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Switch>
        <Route exact path='/' render={() => <p>Main page</p>} />
        <Route path='/people' render={withSuspense(People)} />
        <Route path='/graphic' render={withSuspense(Graphic)} />
        <Route render={() => <p>Page not found</p>} />
      </Switch>
    </Router>
  )
}
