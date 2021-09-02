import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import AboutUsPage from './Pages/AboutUsPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <Router>
      <Navigation />
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/about-us" component={AboutUsPage} />
    </Router>
  );
}

export default App;
