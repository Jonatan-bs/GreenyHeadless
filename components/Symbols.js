import config from "../config"

const Symbols = () => (
    <div className="symbols-container">
    
    <div className="symbols">
        <p className="display-xl color-secondary-light text-title animate slideIn " style={{top : "0px", left : "0px"}}>All our juices are</p>
        <img  className="arrow animate slideIn " src={`${ config.siteURL}/images/arrow.svg`} alt="arrow" style={{top: "80px", left: "50px;"}}/>
        <div className="animate slideIn sequence">
            <img src={`${ config.siteURL}/images/symbol-vegan.svg`} alt="100% natural & vegan" />
        </div>
        <div className="animate slideIn sequence">
            <img src={`${ config.siteURL}/images/symbol-glutenfree.svg`} alt="glutenfree" />
        </div>
        <div className="animate slideIn sequence">
            <img src={`${ config.siteURL}/images/symbol-sugarfree.svg`} alt="sugarfree" />
        </div>        
    
    </div>
</div>
);

export default Symbols;
