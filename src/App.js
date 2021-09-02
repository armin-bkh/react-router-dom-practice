import { Route } from "react-router-dom";
import "./App.scss";
import Layout from "./Layout/Layout";
import AboutUsPage from "./Pages/AboutUsPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Layout>
      <main>
        <Route path="/" exact={true} component={HomePage} />
        <Route path="/about-us" component={AboutUsPage} />
      </main>
    </Layout>
  );
}

export default App;
