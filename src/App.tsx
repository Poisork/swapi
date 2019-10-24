import React from 'react'; 
import './App.css'; 
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Header } from './Components/Header/Header';  
import { Main } from './Pages/Main/Main'; 
const Graphic = React.lazy(() => import('./Pages/Graphic/Graphic'))
const People = React.lazy(() => import('./Pages/People/People'))
 
export const App:React.FC = () => { 
    return (
        <React.Suspense fallback=''>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path='/' render={() => <Main greeting='Hello welcome to' name={"SWAPI"}>children</Main>}/>
                    <Route path='/people' component={People}/>
                    <Route path='/graphic' component={Graphic} />
                    <Route render={() => <p>Page not found</p>}/>
                </Switch>
            </Router>
        </React.Suspense> 
    ); 
} 