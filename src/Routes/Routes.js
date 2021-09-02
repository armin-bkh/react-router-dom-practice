import HomePage from "../Pages/HomePage";
import AboutUsPage from "../Pages/AboutUsPage";
import Profile from "../Pages/Profile";
import NotFound from "../Pages/NotFound";
import BlogsPage from "../Pages/BlogsPage";
import Blog from "../Pages/Blog";
import PostPage from "../Pages/PostPage";

const routes = [
    {path: "/post/:id?", component: PostPage},
    {path: "/blog/:id", component: Blog},
    {path: "/about-us", component: AboutUsPage},
    {path: "/profile", component: Profile},
    {path: "/blog", component: BlogsPage},
    {path: "/", component: HomePage, exact: true},
    {component: NotFound}
]

export default routes