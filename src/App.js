import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import AboutUsPage from './Pages/AboutUsPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={HomePage} />
      <Route path="/about-us" component={AboutUsPage} />
    </BrowserRouter>
  );
}

export default App;
