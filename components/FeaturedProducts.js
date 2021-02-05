import Link from 'next/link'
import SingleProduct from "./partials/SingleProduct"; 

const FeaturedProducts = (props) => (
    
    <div className="product-list center">
        <div className="content col-4 gap-5">
            { props.products.map( (product,i) => {
                // Check if Show on frontpage is true
                
                if (product.meta_data.some(function(p){return p['key'] === "show_on_frontpage" && p['value'] })){
                    return <SingleProduct key={product.id} product={product}/>
                }
            })  }
             
        </div>

        <div className="flexcenter">
            <Link href="/shop">
                <a className="page-link">Shop</a>
            </Link>
        </div>
    </div>
);

export default FeaturedProducts;
