import { Route } from "react-router-dom";
import "./App.scss";
import Layout from "./Layout/Layout";
import routes from "./Routes/Routes";

function App() {
  return (
    <Layout>
      <main>
        {
          routes.map(route => (
            <Route {...route} />
          ))
        }
      </main>
    </Layout>
  );
}

export default App;
