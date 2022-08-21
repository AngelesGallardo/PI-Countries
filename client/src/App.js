import './App.css';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/Home.jsx'



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
