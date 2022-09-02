import './App.css';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/Home.jsx'
import CreateActivity from './components/CreateActivity/CreateActivity.jsx';
import Detail from './components/Detail/Detail.jsx'
import PageNotFound from './components/PageNotFound/PageNotFound';



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
          <Route path = '/detail/:id'>
            <Detail/>
          </Route>
          <Route path='*'>
            <PageNotFound/>
          </Route>
      </Switch> 
    </div>
  );
}

export default App;
