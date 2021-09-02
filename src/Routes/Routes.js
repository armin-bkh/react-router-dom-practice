import HomePage from "../Pages/HomePage";
import AboutUsPage from "../Pages/AboutUsPage";
import Profile from "../Pages/Profile";
import NotFound from "../Pages/NotFound";

const routes = [
    {path: "/", component: HomePage, exact: true},
    {path: "/about-us", component: AboutUsPage},
    {path: "/profile", component: Profile},
    {component: NotFound}
]

export default routes