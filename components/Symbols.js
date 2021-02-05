import config from "../config"

const Symbols = () => (
    <div class="symbols-container">
    
    <div class="symbols">
        <p class="display-xl color-secondary-light text-title animate slideIn " style={{top : "0px", left : "0px"}}>All our juices are</p>
        <img  class="arrow animate slideIn " src={`${ config.siteURL}/images/arrow.svg`} alt="arrow" style={{top: "80px", left: "50px;"}}/>
        <div class="animate slideIn sequence">
            <img src={`${ config.siteURL}/images/symbol-vegan.svg`} alt="100% natural & vegan" />
        </div>
        <div class="animate slideIn sequence">
            <img src={`${ config.siteURL}/images/symbol-glutenfree.svg`} alt="glutenfree" />
        </div>
        <div class="animate slideIn sequence">
            <img src={`${ config.siteURL}/images/symbol-sugarfree.svg`} alt="sugarfree" />
        </div>        
    
    </div>
</div>
);

export default Symbols;
