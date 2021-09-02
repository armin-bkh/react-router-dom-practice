import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const Navigation = (props) => {
    console.log(props);
  return (
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
  );
};

export default withRouter(Navigation);
