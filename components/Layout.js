import Link from 'next/link'
import Head from "next/head"
import config from "../config"
import Footer from "./Footer";
import Nav from "./Nav"; 
import NavMobile from "./NavMobile"; 

const Layout = (props) => {
    console.log(props)
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta charSet="UTF-8"/>
                <title>tester</title>
            </Head>
                
                <header className="greeny">
                    <div className="container">
                        <Link href="/">
                            <a><img src={props.light ? config.siteURL + "/images/logo-light.svg" : config.siteURL + "/images/logo.svg"} alt="logo" className="logo"/></a>
                        </Link>
                        <div className="symbols">
                            <Link href={config.siteURL + "/account"}>
                                <a>
                                    <div className="account symbol">
                                        <img src={props.light ? config.siteURL +  "/images/account-light.svg" : config.siteURL + "/images/account-green.svg"} alt="account" />
                                    </div>
                                </a>
                            </Link>
                    
                            
                            <Link href={config.siteURL + "/cart"}>
                                <a>
                                    <div className="add-to-cart symbol">
                                        <img  className="" src={props.light ? config.siteURL + "/images/cart-light.svg" : config.siteURL + "/images/cart-green.svg"} alt="cart" />
                                        
                                            <div className="qty" 
                                                /* <?php if(!WC()->cart->get_cart_contents_count()) : ?> 
                                                style="display:none" 
                                                 <?php endif ?> */ >
                                                    <span >
                                                        {/* <?php echo WC()->cart->get_cart_contents_count(); ?> */}
                                                    </span>
                                            </div>
                                        

                                    </div>
                                </a>
                            </Link>
                        </div>
                        <Nav/>
                    </div>
                </header>
                    <div className="wrapper">
                        { props.children }
                    </div>
                <NavMobile/>
                <Footer/>
        </>
    )

}
export default Layout