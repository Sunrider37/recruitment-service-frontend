
import Home from "./components/pages/browse/home/Home";
import Login from "./components/pages/browse/login/login";
import Register from './components/pages/browse/register/register';
import Browse from "./components/pages/browse/Browse";
import { BrowserRouter as Router, Switch, Route, Redirect,} from 'react-router-dom'
import { useContext,useState,useEffect } from 'react';
import ThankYou from "./components/thankyou/ThankYou";
import { AuthContext } from "./context/AuthContext";



function App() {
  
  const {user} = useContext(AuthContext)
  const token = localStorage.getItem("user")?.includes('authenticationToken')
  console.log(token)
  return (
    
    <Router>
    <Switch>
      <Route exact path="/">
        {user ?  <Home /> : <Register/>}
      </Route>
      <Route path="/login">
        {user ? <Redirect to="/" /> : <Login />}
      </Route>
      <Route path="/signup">
      {user ? <Redirect to="/" /> : <Register />}
      </Route>
      <Route path="/browse">
      <Browse />
      </Route>
      <Route path="/success">
        <ThankYou></ThankYou>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
