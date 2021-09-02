import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import AboutUsPage from './Pages/AboutUsPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about-us">about-us</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/about-us" component={AboutUsPage} />
    </Router>
  );
}

export default App;
