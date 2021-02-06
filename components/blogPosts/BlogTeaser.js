import SingleBlogpost from "./../partials/SingleBlogpost"; 
import Link from 'next/link'

const BlogTeaser = props => (
 
    <>

        { props.blogPosts.filter( post => post.status === "publish" ).slice(0,2).map( post => <SingleBlogpost key={post.id} post={post}/>) }
            
        <div className="flexcenter">
            <Link href="/blog">
                <a className="page-link">Blog</a>
            </Link>
        </div>

    </>
    
);

export default BlogTeaser;
