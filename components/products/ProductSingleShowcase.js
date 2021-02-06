import Link from 'next/link'
import SingleProduct from "./../partials/SingleProduct"; 

const ProductSingleShowcase = (props) => {
    let {product} = props
    let background = product.meta_data.find( m => m.key === "background_color")
    background = background ? background.value : ""
    console.log('background')
    console.log(product)
    return (
        <div style={{background: background}} id={product.id} className="header-padding single-product-showcase">
            <div className="product-wrap">
                <div className="product-image-width">
                    <div className="aspect-wrap">
                        <img  className="product-image animate slideInCenter" src={product.images[0].src}  alt={product.images[0].alt}/>
                        <div className="circle"></div>
                    </div>
                </div> 
                <div className="info">
                    <p  className="title" > 
                        {product.name}
                    </p>

                    <p className={`price ${ product.on_sale? "onsale" : ""}  `}>            
                        {product.purchasable && product.stock_status ==="instock" ? 
                        (
                            <>
                                <span className={`sales-price ${!product.on_sale? "hidden": ""}`}> 
                                    {product.regular_price}
                                </span>
                                <span className="displayPrice">
                                    {product.price}
                                </span>
                            </>
                        ):(
                            <span className="outofstock">Out of stock</span>
                        )
                        }
                        

                    </p>
                    { product.purchasable && product.stock_status ==="instock" ? 
                    (
                    <div className="add-to-cart-button pointer light" data-id={product.id} > 
                        <p>Add to cart</p>
                    </div>
                    ):""}
                

                </div>

            </div>
            
        </div>
    )
};

export default ProductSingleShowcase;
