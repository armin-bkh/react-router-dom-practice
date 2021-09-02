import { Route } from "react-router-dom";
import "./App.scss";
import Layout from "./Layout/Layout";
import AboutUsPage from "./Pages/AboutUsPage";
import HomePage from "./Pages/HomePage";
import Profile from "./Pages/Profile";

function App() {
  return (
    <Layout>
      <main>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/about-us" component={AboutUsPage} />
        <Route path="/profile" component={Profile} />
      </main>
    </Layout>
  );
}

export default App;
