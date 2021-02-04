import Document from 'next/document'
import Head from "next/head"
import config from "../config"
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Layout = (props) => {
    return (
        <html>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta charset="UTF-8"/>
                <title>tester</title>
            </Head>
                
            <body>
                <header className="greeny">
                    <div className="container">
                        <a href={config.siteURL}>
                            <img src="<?php bloginfo('template_directory')?>/images/logo.svg" alt="logo" className="logo"/>
                        </a>
                        {/* <div className="symbols">
                            <a href="<?php echo get_page_link( 9 ); ?>">
                                <div className="account symbol">
                                    <img src="<?php echo get_template_directory_uri() ?>/images/account-green.svg" alt="account" >
                                </div>
                            </a>
                            <a href="<?php echo get_page_link( get_page_by_title( 'cart' )->ID ); ?>">
                                <div className="add-to-cart symbol">
                                    <img  className="" src="<?php echo get_template_directory_uri() ?>/images/cart-green.svg" alt="cart" >
                                    
                                        <div className="qty" <?php if(!WC()->cart->get_cart_contents_count()) : ?> style="display:none" <?php endif ?>>
                                                <span >
                                                    <?php echo WC()->cart->get_cart_contents_count(); ?>
                                                </span>
                                        </div>
                                    

                                </div>
                            </a>
                        </div> */}
                        {/* <?php
                            wp_nav_menu( 
                                array(
                                    'menu_className' => 'primary-menu',        
                                    'theme_location' => 'primary-menu'
                                ) 
                            )
                        ?> */}
                    </div>
                </header>
                    <div className="wrapper">
                        { props.children }
                    </div>

                {/* <?php  get_template_part('components/mobile-menu');?> */}
                <footer>
                    <div className="some-buttons">
                        <div>
                            <a href="#"><img  className="symbol" src="<?php echo get_template_directory_uri() ?>/images/instagram.svg" alt="instagram link" /></a>
                        </div>
                        <div>
                            <a href="#"><img  className="symbol" src="<?php echo get_template_directory_uri() ?>/images/twitter.svg" alt="twitter link" /></a>
                        </div>
                        <div>
                            <a href="#"> <img  className="symbol" src="<?php echo get_template_directory_uri() ?>/images/facebook.svg" alt="facebook link" /></a>
                        </div>

                    </div>
                    {/* <?php
                        wp_nav_menu( 
                            array(
                                'menu_class' => 'secundary-menu',        
                                'theme_location' => 'secundary-menu'
                            ) 
                        )
                    ?> */}
                </footer>
            </body>
        </html>
    )

}
export default Layout