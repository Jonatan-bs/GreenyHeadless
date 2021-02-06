import Layout from "../../components/Layout"
import ProductSingleShowcase from "../../components/products/ProductSingleShowcase"
import Ingredients from "../../components/partials/Ingredients"
import config from "./../../config"
import fetch from "isomorphic-unfetch";
import { useRouter } from 'next/router'

const SingleBlogPost = ({blogPosts}) => {
    const router = useRouter()
    const { slug } = router.query
    let blogPost = blogPosts.find( b => b.slug === slug)
    return (
        <Layout >
            <section className="content text page header-padding">
    
                <h1>{blogPost.title.rendered}</h1>
                <img  className="featuredImage" src={blogPost.better_featured_image.source_url}  alt={blogPost.better_featured_image.alt_text}/>


                <div dangerouslySetInnerHTML={{ __html: blogPost.content.rendered }}></div>
                

            </section>
        </Layout>
    )
};


export default SingleBlogPost;


let headers = new Headers()
headers.append('Authorization', config.wpApi.basicAuth);


export const getStaticProps = async () => {
    // Get blogPosts
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

export async function getStaticPaths(ctx) {
    // Get blogPosts
    let blogPosts = await fetch(`${config.wpApi.siteURL}/wp-json/wp/v2/posts?status=publish`,
    {
        method:'GET',
        headers: headers
    })
    blogPosts = await blogPosts.json()
  
    return {
      paths: blogPosts.map(({ slug }) => `/blog/${slug}`) || [],
      fallback: false,
    }
}
