import config from "../config"

const Hero = () => (
    <div className="hero">
        <div className="text">
            <p className="display-md color-contrast">a convenient way to add fruits and vegetables into your diet</p>
            <p className="body-sm color-light">Simply add water or any kind of milk and ENJOY!</p>            
        </div>
        <div className="sachets">
            <img className="sachet animate" src={`${ config.siteURL}/images/sachet-1.png`} alt="Reddy Juice - sachet" />
            <img className="sachet animate" src={`${ config.siteURL}/images/sachet-2.png`} alt="Greeny Juice - sachet" />
            <img className="sachet animate" src={`${ config.siteURL}/images/sachet-3.png`} alt="Yellow Juice - sachet" />
        </div>
        
    </div>
);

export default Hero;