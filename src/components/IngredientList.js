// import React, { useState } from "react";
import BurgerStack from "./BurgerStack";
import Ingredient from './Ingredients'

//// overall ingredients to grab LEFT

const IngredientList = (props) => {
        // error, not a function
        const allIngredients = props.ingredients.map((ingred, idx) => (

        <li key={idx}>
            <Ingredient 
                ingredient={ingred}
                itemKey={idx}
                clickFunc={props.add}
            />
        </li>
        ))    

    return (
        <section className='pane'>
            <h3>Ingredient List</h3>
            <ul>
                { allIngredients }
            </ul>
        </section>
    )}
    
export default IngredientList;
