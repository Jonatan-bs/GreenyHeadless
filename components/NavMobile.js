import Link from 'next/link'
import config from "../config"

const MobileNav = () => (
    <div id="mobile-nav" class="active">
        <div class="menu-primary-menu-mobile-container">
            <ul id="menu-primary-menu-mobile" class="primary-menu-mobile">
                <li id="menu-item-70" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-70">
                    <Link href={config.siteURL + "/contact"}>
                        <a>Contact</a>
                    </Link>
                </li>
                <li id="menu-item-71" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-71">
                    <Link href={config.siteURL + "/faq"}>
                        <a>FAQ</a>
                    </Link>
                </li>
                <li id="menu-item-74" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-74">
                    <Link href={config.siteURL + "/about-us"}>
                        <a>About Us</a>
                    </Link>
                </li>
                <li id="menu-item-72" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-72">
                    <Link href={config.siteURL + "/blog"}>
                        <a>Blog</a>
                    </Link>
                </li>
                <li id="menu-item-73" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-73">
                    <Link href={config.siteURL + "/shop"}>
                        <a>Shop</a>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
);

export default MobileNav;