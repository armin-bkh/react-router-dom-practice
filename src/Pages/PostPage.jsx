import { Link } from "react-router-dom";

const PostPage = ({match}) => {
    const id = match.params.id || 1;
    console.log(match)
    return ( 
        <section>
            <h1>post number - {id}</h1>
        </section>
     );
}
 
export default PostPage;