import { Link } from "react-router-dom";
import queryString from 'query-string';

const Blog = ({match, location}) => {
    const id = match.params.id;
    const query = queryString.parse(location.search);
    console.log(query);
    return ( 
        <section>
            <h1>blog number { id }</h1>
            <Link to={{pathname: `/blogs/${parseInt(id) + 1}`, search: "sort=name"}}>go to next page</Link>
        </section>
     );
}
 
export default Blog;