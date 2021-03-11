import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Home from './Components/Home/Home';
import TeamDetails from './Components/TeamDetails/TeamDetails';
import NotFound from './Components/NotFound/NotFound';


function App() {
  
  return (
    <Router>
     <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/details/:idTeam">
        <TeamDetails></TeamDetails>
      </Route>
      <Route path="*">
        <NotFound></NotFound>
      </Route>
     </Switch>    
    </Router>    
  );
}

export default App;
