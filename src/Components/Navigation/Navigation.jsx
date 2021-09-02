import { withRouter } from "react-router";
import { Link, NavLink } from "react-router-dom";

const Links = [
  {to: "/", title: "Home", exact: true},
  {to: "/about-us", title: "About us",}
]
const Navigation = (props) => {
    console.log(props);
  return (
      <nav className="navBar">
        <ul className="navBar-nav">
          {
            Links.map(link => 
              <li className="navItem" key={link.to}>
                <NavLink activeClassName="activeLink" exact={link.exact || false} to={link.to}>{link.title}</NavLink>
              </li>
              )
          }
        </ul>
      </nav>
  );
};

export default withRouter(Navigation);
