import config from "../config"

const Footer = () => (
    <footer>
        <div className="some-buttons">
            <div>
                <a href="#"><img  className="symbol"  src={config.siteURL + "/images/instagram.svg"} alt="instagram link" /></a>
            </div>
            <div>
                <a href="#"><img  className="symbol"  src={config.siteURL + "/images/twitter.svg"} alt="twitter link" /></a>
            </div>
            <div>
                <a href="#"> <img  className="symbol"  src={config.siteURL + "/images/facebook.svg"} alt="facebook link" /></a>
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
);

export default Footer;