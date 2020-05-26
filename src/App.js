import React from 'react';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dash from './components/Dash';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {

  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/dash' component={Dash} />
        <Route path='/' component={SignUp} />        
      </Switch>
    </Router>
  );
}

export default App;