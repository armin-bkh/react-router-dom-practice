import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <aside>
      <nav>
        <ul className="sidebar">
          <li>
            <NavLink activeClassName="activeTab" to="/profile/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink activeClassName="activeTab" to="/profile/downloads">Downloads</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
