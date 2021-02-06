import Link from 'next/link'
import SingleProduct from "./../partials/SingleProduct"; 

const ProductsList = (props) => (
    
    <div className="product-list center">
        <div className="content col-4 gap-5">
            { props.products.map( (product,i) => {
                
                    return <SingleProduct key={product.id} product={product}/>
                
            })  }
             
        </div>

    </div>
);

export default ProductsList;
