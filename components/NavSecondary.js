import Link from 'next/link'
import config from "../config"

const Nav = () => (
    <div className="menu-secondary-meny-container">
            <ul id="menu-secondary-meny" className="secundary-menu">
                <li id="menu-item-44" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-44">
                    <Link href={config.siteURL + "/faq"}>
                        <a>FAQ</a>
                    </Link>
                </li>
                <li id="menu-item-46" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-46">
                    <Link href={config.siteURL + "/privacy-policy"}>
                        <a>Privacy Policy</a>
                    </Link>
                </li>
                <li id="menu-item-43" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-43">
                    <Link href={config.siteURL + "/contact"}>
                        <a>Contact</a>
                    </Link>
                </li>
            </ul>
        </div>
);

export default Nav;