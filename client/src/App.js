import './App.css';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/Home.jsx'
import CreateActivity from './components/CreateActivity/CreateActivity';





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
          <Route path= '/activities'>
            <CreateActivity/>
          </Route>
      </Switch> 
    </div>
  );
}

export default App;
