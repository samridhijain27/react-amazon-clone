import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';

function App() {
  return (
    <Router>
    <div classname ="app"> 
    <Switch>
    <Route path ="/checkout">
      <Header/>
      <Checkout/>
   
    </Route>
    <Route path="/login">
    <Login/>
    </Route>
    <Route path="/">
      <Header/>
      <Home></Home>
    </Route>
    </Switch>
      </div>
      </Router>
  );
    
}

export default App;
