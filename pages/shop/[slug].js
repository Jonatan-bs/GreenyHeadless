import Layout from "../../components/Layout"
import ProductSingleShowcase from "../../components/products/ProductSingleShowcase"
import Ingredients from "../../components/partials/Ingredients"
import config from "./../../config"
import fetch from "isomorphic-unfetch";
import { useRouter } from 'next/router'

const ShopIndex = (props) => {
    const router = useRouter()
    const { slug } = router.query
    let product = props.products.find( p => p.slug === slug)
    let components = product.meta_data.find( m => m.key === "component_position_fields")
    components = components ? components.value : ""
    let ingredients = product.meta_data.find( m => m.key === "ingredients_fields")
    ingredients = ingredients ? ingredients.value : ""

    return (
        <Layout light>
            <div id="single-product">
                <ProductSingleShowcase product={product}/>
                <div className="content text ">
                    <div className="nav">
						<a href="#" data-section="description" className="active">Description</a>
						<a href="#" data-section="reviews" >Reviews</a>
					</div>
                    <section className="description content mb">
                        {components? (
                            components.map( (c,i)=> {
                                return c.component === "content" ?
                                    product.description? 
                                        <div key={i} dangerouslySetInnerHTML={{ __html: product.description }}></div>
                                    :
                                        <span key={i}>"There's no description for this product"</span>
                                :
                                    c.component === "ingredients" ?
                                    <Ingredients key={i} ingredients={ingredients}/>
                                : ""
                            })
                        ):(
                            product.description? 
                                    <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
                                :
                                    <span>"There's no description for this product"</span>
                        )}
                    </section>
                </div>

            </div>
        </Layout>
    )
};

export default ShopIndex;

let headers = new Headers()
headers.append('Authorization', config.wpApi.basicAuth);


export const getStaticProps = async () => {
    // Get products
    let products = await fetch(`${config.wpApi.siteURL}/wp-json/wc/v3/products?status=publish`,
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
    let products = await fetch(`${config.wpApi.siteURL}/wp-json/wc/v3/products?status=publish`,
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
