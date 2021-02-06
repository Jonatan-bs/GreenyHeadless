import config from "../config"
import Link from 'next/link'

const Starterpack = () => (
    <div className="starterpack">
        <div>
                
            <div className="blue-circle"></div>
            <div className="blue-circle"></div>
            <div className="blue-circle"></div>

            <div className="fruits">
                <img width="183px" src={`${ config.siteURL}/images/fruit/pineapple-blue.svg`} alt="pineapple" style={{ transform: "translate(-70px, -10px) rotate(-15deg)", width: "150px;"}}/>
                <img width="133px" src={`${ config.siteURL}/images/fruit/lime-blue.svg`} alt="lime" style={{transform:" translate(30px, 40px) rotate(25deg)", width: "100px;"}}/>
            </div>
            <p className="display-md color-primary" >
                Start or complement your diet today <br/>
                with our <Link href={config.siteURL + "/"}><a className="color-contrast-dark">starter pack</a></Link>
            </p>
        </div>
    </div>
);

export default Starterpack;