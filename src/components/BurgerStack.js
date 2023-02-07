// import React, { useState } from "react";
import Ingredient from "./Ingredients";

const BurgerStack = (props) => {

    // const newStack = props.newstack.map((newstack) => <li>{newStack}</li>)
    console.log(props.ingredients)
    let burgerSlices = props.ingredients.map((ingred, idx) => (
        <li key={idx}>
            <Ingredient 
                itemKey={idx}
                ingredient={ingred}
                clickFunc={props.remove}
            />
        </li>
    ))

    return (
        <div className="burgerPane"> Burger Stack
            <ul>
                { burgerSlices }
            </ul>
        
            <button  
                    onClick={props.clear}>Clear Burger
            </button>
        </div>
    )
    
}



export default BurgerStack
