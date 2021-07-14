
import Home from "./components/pages/browse/home/Home";
import Login from "./components/pages/browse/login/login";
import Register from './components/pages/browse/register/register';
import Browse from "./components/pages/browse/Browse";
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import { useContext } from 'react';
import ThankYou from "./components/thankyou/ThankYou";
import authService from "./components/services/auth.service";
import UserContext from "./components/context/UserContext";
import ProtectedRoute from "./components/services/IsUserRedirect";


function App() {
  
  const {user} = authService.getCurrentUser();
  return (
    
   <Router>
     <Switch>
       <Route path="/browse">
       <Browse></Browse>
       </Route>
       <Route path="/login">
        <Login />
       </Route>
       <Route path="/signup" >
       <Register />
       </Route>
       <ProtectedRoute user={user}  path="/" exact>
         <Home />
       </ProtectedRoute>
       <Route path="/success">
       <ThankYou></ThankYou>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
