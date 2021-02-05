import Link from 'next/link'

const SingleProduct = (props) => (


    <div id={`product-${props.product.id}`} className={`product animate slideIn sequence ${props.loadmore ? ' activated ' : ''}`}> 
        
        <Link href={props.product.permalink}>
            <a>
                <img  className="product-image" src={props.product.images[0].src}  alt={props.product.images[0].alt}/>
                
                { props.product.stock_status !== "instock" ? (<div className="info outofstock">Out of stock</div>):""}
                { props.product.on_sale ? (<div className="info sale">Sale!</div>):"" }      

            </a>
        </Link>
        <Link href={props.product.permalink}>
            <a >
                <p className="display-md color-dark  title">{props.product.name}</p>
            </a>
        </Link>

        <p className="color-medium excerpt">{props.product.short_description.replace(/(<([^>]+)>)/gi, "")}</p>
        <div className="flex">   
            { props.product.purchasable && props.product.stock_status === "instock" ? (
        
                <p className={`price ${props.product.on_sale ? onsale : ""}`}>
                    { props.product.type !== 'variable' ? (
                        props.product.on_sale ? <span className="sales-price">{props.product.regular_price} $$</span> + props.product.price + "$$": props.product.price + "$$"
                    ) : "" }
                </p>
            ) : ""}
                
        </div>
    </div>
);

export default SingleProduct;