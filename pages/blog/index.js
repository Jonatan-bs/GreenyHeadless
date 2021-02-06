import Layout from "../../components/Layout"
import BlogList from "../../components/blogPosts/BlogList"
import config from "./../../config"
import fetch from "isomorphic-unfetch";

const BlogIndex = ({blogPosts}) => {
    return (
        <Layout >
            <BlogList blogPosts={blogPosts}/>
        </Layout>
    )
};


let headers = new Headers()
headers.append('Authorization', config.wpApi.basicAuth);

export const getStaticProps = async () => {
    // Get products
    let blogPosts = await fetch(`${config.wpApi.siteURL}/wp-json/wp/v2/posts?status=publish`,
    {
        method:'GET',
        headers: headers
    })
    blogPosts = await blogPosts.json()



    return {
        props: 
        {
            blogPosts    
        }
    }

}

export default BlogIndex;