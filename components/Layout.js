import Link from 'next/link'
import Head from "next/head"
import config from "../config"
import Footer from "./Footer";
import Nav from "./Nav"; 
import NavMobile from "./NavMobile"; 

const Layout = (props) => {
    return (
        <>
            <Head>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script type="text/javascript" src="/static/app.js"></script>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta charSet="UTF-8"/>
                <title>tester</title>

            </Head>
                
                <header className={`greeny ${props.light ? "light" : ""} `}>
                    <div className="container">
                        <Link href="/">
                            <a><img src={`${ config.siteURL}/images/${props.light ? "logo-light.svg" : "logo.svg" }`} alt="logo" className="logo"/></a>
                        </Link>
                        <div className="symbols">
                            <Link href={config.siteURL + "/account"}>
                                <a>
                                    <div className="account symbol">
                                        <img src={`${ config.siteURL}/images/${props.light ? "account-light.svg" : "account-green.svg" }`} alt="account" />
                                    </div>
                                </a>
                            </Link>
                    
                            
                            <Link href={config.siteURL + "/cart"}>
                                <a>
                                    <div className="add-to-cart symbol">
                                        <img  className="" src={`${ config.siteURL}/images/${props.light ? "cart-light.svg" : "cart-green.svg" }`} alt="cart" />
                                        
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
                        { props.content ? 
                            (<div className="content header-padding"> { props.children } </div> )
                        : 
                             props.children 
                        }
                        
                    </div>
                <NavMobile/>
                <Footer/>
        </>
    )

}
export default Layout