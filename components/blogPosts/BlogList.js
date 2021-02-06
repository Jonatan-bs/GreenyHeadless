import SingleBlogpost from "./../partials/SingleBlogpost"; 
import Link from 'next/link'

const BlogList = props => (
 
    <div className="content header-padding">
        {/* <section class="content mb"> */}
            {/* <div class="categories">
    
            </div> */}
            { props.blogPosts.map( post => <SingleBlogpost key={post.id} post={post}/>) }
        {/* </section> */}
    </div>
    
);

export default BlogList;
