import React, {Suspense, lazy} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import './Styles/spinner.scss';


import {Navbar} from './components/Nav';
import {Loader} from './components/loader';


const Home = lazy(() => import ('./components/Home'));
const Index = lazy(() => import ('./components/index'));
const List = lazy(() => import ('./components/List'));

function App() {
  return (
    <Router>
        <Suspense fallback={<Loader/>}>
            <Navbar/>
                <div className="bg-light">
                    <Switch>
                        <Route exact  path="/" component={Index}/>
                        <Route exact path="/search" component={Home}/>
                        <Route exact path="/list" component={List}/>
                    </Switch>
                </div>
            </Suspense>
      </Router>
  );
}

export default App;
