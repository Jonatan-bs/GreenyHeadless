import Layout from "../../components/Layout"
import ProductList from "../../components/products/productsList"
import config from "./../../config"
import fetch from "isomorphic-unfetch";

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
    // Get products
    let products = await fetch(`${config.wpApi.siteURL}/wp-json/wc/v3/products`,
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

export default ShopIndex;