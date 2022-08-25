import styles from './css/app.module.scss';

import Container from './components/Container/Container';
import { Route, Router, Link } from 'react-router-dom';

import Header from './components/Header/Header';
import HomePage from './Pages/HomePage'
import Feedback from './components/Feedback/Feedback';
import NotFound from './components/NotFound'


// import HomeView from './Pages/HomeView';


const App = () => {
  return (    
  <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        
          <Route path="/about">
            <HomePage />
          </Route>
          <Route path="/topics">
            <HomePage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        
      </div>
    </Router>
  )
}

export default App;
