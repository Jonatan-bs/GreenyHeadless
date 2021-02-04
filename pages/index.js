import Layout from "../components/Layout"
import config from "../config"
import fetch from "isomorphic-unfetch";

const Index = (props) => {
    return (
        <Layout light="false" ></Layout>
    )
};

// Index.layout = "default";

let headers = new Headers()
headers.append('Authorization', config.wpApi.basicAuth);

export const getStaticProps = async () => {
    // Get products
    let products = await fetch(`${config.wpApi.siteURL}/wp-json/wc/v3/products`,
    {
        method:'GET',
        headers: headers
    })
    products = await products.json()

    // Get posts
    let posts = await fetch(`${config.wpApi.siteURL}/wp-json/wp/v2/posts`,
    {
        method:'GET',
        headers: headers
    })
    posts = await posts.json()


    return {
        props: 
        {
            products,
            posts
        }
    }

}

export default Index;