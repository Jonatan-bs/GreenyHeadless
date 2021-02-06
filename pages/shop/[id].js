import Layout from "../../components/Layout"
import ProductList from "../../components/products/productsList"
import config from "./../../config"
import fetch from "isomorphic-unfetch";
import { useRouter } from 'next/router'

const ShopIndex = (props) => {
    return (
        <Layout content>
            <ProductList products={props.products}/>
        </Layout>
    )
};


let headers = new Headers()
headers.append('Authorization', config.wpApi.basicAuth);


export const getStaticProps = async () => {
    const router = useRouter()
    const { id } = router.query
    console.log(router.query)
    // Get products
    let products = await fetch(`${config.wpApi.siteURL}/wp-json/wc/v3/products/` + id,
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
      paths: products.map(({ id }) => `/shop/${id}`) || [],
      fallback: false,
    }
}

export default ShopIndex;