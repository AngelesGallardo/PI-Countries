import './App.css';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../src/components/LandingPage/LandingPage';
import Home from '../src/components/Home/Home';


function App() {
  return (
    <div className="App">
     <Switch>
        <Route exact path= '/'>
          <LandingPage/>
        </Route>
        <Route path= '/home'>
          <Home/>
        </Route>
    </Switch> 
    </div>
  );
}

export default App;
