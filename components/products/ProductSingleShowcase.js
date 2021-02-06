import Link from 'next/link'
import SingleProduct from "./../partials/SingleProduct"; 

const ProductSingleShowcase = (props) => {
    let {product} = props
    let background = product.meta_data.find( m => m.key = "background_color" && m.value)
    background = background ? background.value : ""
    
    return (
        <div style={{background: background}} id={product.id} className="header-padding single-product-showcase">
            <div className="product-wrap">
                <div className="product-image-width">
                    <div className="aspect-wrap">
                        {/* <img  className="product-image animate slideInCenter"  src={product.better_featured_image.source_url}  alt={product.better_featured_image.alt_text}/> */}
                        <div className="circle"></div>
                    </div>
                </div> 
            </div>
            <div className="info">
                <p  className="title" > 
                    {product.name}
                </p>

            </div>
        </div>
    )
};

export default ProductSingleShowcase;
