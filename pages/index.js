import Layout from "../components/Layout"
import config from "../config"
import fetch from "isomorphic-unfetch";

const Index = (props) => {
    console.log(props)
    return (
        <Layout>Hello world</Layout>
    )
};

let headers = new Headers()
headers.append('Authorization', config.wpApi.basicAuth);

Index.getInitialProps = async () =>{
    // Get products
    let products = await fetch(`${config.wpApi.siteURL}/wp-json/wc/v3/products`,
    {
        method:'GET',
        headers: headers
    })
    products = await products.json()

    let posts = await fetch(`${config.wpApi.siteURL}/wp-json/wp/v2/posts`,
    {
        method:'GET',
        headers: headers
    })
    posts = await posts.json()

    // Get posts

    return {
        products,
        posts
    }

}

export default Index;