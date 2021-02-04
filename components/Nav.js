import Link from 'next/link'
import config from "../config"

const Nav = () => (
    <div className="menu-primary-container">
        <ul id="menu-primary" className="primary-menu">
            
            <li id="menu-item-16" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16">
                <Link href={config.siteURL + "/shop"}>
                    <a>
                        Shop
                    </a>
                </Link>
            </li>

            <li id="menu-item-17" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17">
                <Link href={config.siteURL + "/about-us"}>
                    <a>
                        About Us
                    </a>
                </Link>
            </li>
            
            <li id="menu-item-23" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-23">
                <Link href={config.siteURL + "/blog"}>
                    <a>
                        Blog
                    </a>
                </Link>
            </li>
        </ul>
    </div>
);

export default Nav;