import { Link } from "react-router-dom";

const Blog = ({match}) => {
    const id = match.params.id;
    return ( 
        <section>
            <h1>blog number { id }</h1>
            <Link to={`/blogs/${parseInt(id) + 1}`}>go to next page</Link>
        </section>
     );
}
 
export default Blog;