import Layout from "../../components/Layout"
import ProductSingleShowcase from "../../components/products/ProductSingleShowcase"
import config from "./../../config"
import fetch from "isomorphic-unfetch";
import { useRouter } from 'next/router'

const ShopIndex = (props) => {
    const router = useRouter()
    const { slug } = router.query
    let product = props.products.find( p => p.slug === slug)
    return (
        <Layout light>
            <ProductSingleShowcase product={product}/>
        </Layout>
    )
};

export default ShopIndex;

let headers = new Headers()
headers.append('Authorization', config.wpApi.basicAuth);


export const getStaticProps = async () => {
    // Get products
    let products = await fetch(`${config.wpApi.siteURL}/wp-json/wc/v2/products`,
    {
        method:'GET',
        headers: headers
    })
    products = await products.json()



    return {
        props: 
        {
            products    
        }
    }

}

export async function getStaticPaths(ctx) {
    // Get products
    let products = await fetch(`${config.wpApi.siteURL}/wp-json/wc/v3/products`,
    {
        method:'GET',
        headers: headers
    })
    products = await products.json()
  
    return {
      paths: products.map(({ slug }) => `/shop/${slug}`) || [],
      fallback: false,
    }
}
