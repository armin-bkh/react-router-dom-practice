import { Route, Link } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import AboutUsPage from "./Pages/AboutUsPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
      <Layout>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/about-us" component={AboutUsPage} />
      </Layout>
  );
}

export default App;
