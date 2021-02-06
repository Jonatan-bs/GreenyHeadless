import config from "../../config"

const Ingredients = ({ingredients}) => {
    console.log(ingredients)

    return(
    <div className="ingredients">
        
        {ingredients.map( (ingredient,i) => (
            <div key={i} className="ingredient animate slideIn sequence">
            <div className="image-percentage">
                {/* <img 
                    className="symbol" 
                    src="<?php echo $image_attr[0] ?>" 
                    width="<?php echo $image_attr[1] ?>" 
                    height="<?php echo $image_attr[2] ?>" 
                    alt="Fruit symbol" 
                    /> */}

                <p className="percentage">{ingredient.percentage}</p>
            </div>
            <div className="title">
                {ingredient.title}
            </div>
            <div className="text">
                {ingredient.text}
            </div>
            </div>
        ))}
           
    </div>

    )
};

export default Ingredients;