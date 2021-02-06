import config from "../config"

const About = () => (
    <>
        <div className="flexcenter">
            <h2 className="color-primary display-xl"> Why Greeny Juices?</h2>
        </div>
        <div className="about-greeny">
            <div className="content py">
                <div className="cards">
                    <div className="card text-display animate slideIn sequence">
                        <img  className="symbol" src={`${ config.siteURL}/images/symbol1-light.svg`} alt="Greeny Juices - sachets symbol" />
                        <p className="display-sm color-light">It’s a convenient way to add fruits and vegetables into your diet without worrying about choosing the right ingredients by yourself.</p>
                    </div>
                    <div className="card text-display  animate slideIn sequence">
                        <img  className="symbol" src={`${ config.siteURL}/images/symbol3-light.svg`} alt="Cut down on food waste - illustration" />
                        <p className="display-sm color-light">It helps you help the world and save money, by cutting down on food waste</p>
                    </div>
                    <div className="card text-display  animate slideIn sequence">
                        <img  className="symbol" src={`${ config.siteURL}/images/symbol2-light.svg`} alt="Yum!" />
                        <p className="display-sm color-light">It’s fully natural, nutritious and delicious!
                        </p>
                    </div>
                    <div className="card text-display  animate slideIn sequence">
                        <img  className="symbol" src={`${ config.siteURL}/images/symbol4-light.svg`} alt="tailored to your specific needs - illustration" />
                        <p className="display-sm color-light">It’s tailored to your specific needs, just choose the variant that matches your goals!
                        DETOX, IMMUNITY and ENERGY</p>
                    </div>
                </div>
            </div>

        </div>
    </>

);

export default About;
