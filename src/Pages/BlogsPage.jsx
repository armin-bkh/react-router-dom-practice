import { Link } from "react-router-dom";

const links = [
    {title: "blog -1", to: "blog/1"},
    {title: "blog -2", to: "blog/2"},
    {title: "blog -3", to: "blog/3"}
]

const BlogsPage = () => {
    return ( 
        <section>
            <h1>blogs page</h1>
            <ul>
            {
            links.map(link => <li key={link.to}><Link to={link.to}>{link.title}</Link></li>)
            }
            </ul>
        </section>
     );
}
 
export default BlogsPage;