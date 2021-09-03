import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Layout from "./Layout/Layout";
import routes from "./Routes/Routes";

function App() {
  return (
    <Layout>
      <main>
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
        </Switch>
      </main>
    </Layout>
  );
}

export default App;
