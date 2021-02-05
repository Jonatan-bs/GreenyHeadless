import SingleBlogpost from "./partials/SingleBlogpost"; 
import config from "../config"
import Link from 'next/link'

const BlogTeaser = props => (
 
    <>

        { props.posts.filter( post => post.status === "publish" ).slice(0,2).map( post => <SingleBlogpost post={post}/>) }
            
        <div className="flexcenter">
            <Link href="/blog">
                <a className="page-link">Blog</a>
            </Link>
        </div>

    </>
    
);

export default BlogTeaser;
