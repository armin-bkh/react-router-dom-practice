import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <aside>
      <nav>
        <ul className="sidebar">
          <li>
            <Link to="/profile/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/profile/downloads">Downloads</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
