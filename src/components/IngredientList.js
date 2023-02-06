import React, { useState } from "react";
import BurgerStack from "./BurgerStack";
import Ingredient from './Ingredients'

//// overall ingredients to grab LEFT

function IngredientList (props) {

        
          const allIngredients = this.props.ingredients.map((ingred, idx) => (

            <li key={idx}>
                <Ingredient 
                    ingredient={ingred}
                    itemKey={idx}
                    clickFunc={this.props.add}
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
