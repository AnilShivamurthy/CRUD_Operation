import React from 'react';
import {createBrowserHistory} from 'history';
import {Switch, Route, Router} from 'react-router-dom';
import Developers from './Component/Developers';
import FeaturedDevelopers from './Component/FeaturedDevelopers'


function App() {
  return (
    <div className="App">
      <Router history={createBrowserHistory()}>
        <Switch>
        <Route path="/edit-developer/:id" exact component={FeaturedDevelopers}/>  
        <Route path="/add-developer" exact component={FeaturedDevelopers}/>
          <Route path="/" exact={false} component={Developers}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
