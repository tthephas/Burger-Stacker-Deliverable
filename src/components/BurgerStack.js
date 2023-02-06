import React, {Component} from "react";
import Ingredient from "./Ingredients";

class BurgerStack extends Component {

    
    render () { 
        // const newStack = props.newstack.map((newstack) => <li>{newStack}</li>)

        let burgerSlices = this.props.ingredients.map((ingred, idx) => (
            <li key={idx}>
                <Ingredient 
                    itemKey={idx}
                    ingredient={ingred}
                    clickFunc={this.props.remove}
                />
                 </li>
        ))


        return (
            <div className="burgerPane"> Burger Stack
            <ul>
                { burgerSlices }
            </ul>
            
            <button  
                    onClick={this.props.clear}>Clear Burger
            </button>
            </div>
        )
    }
}



export default BurgerStack
