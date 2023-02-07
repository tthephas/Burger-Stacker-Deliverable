import React, { useState } from "react";
import BurgerStack from "./BurgerStack";
import IngredientList from "./IngredientList";

// export default? need props?
const BurgerPane = () => {

    const ingredientsArray = [
        {name: 'Kaiser Bun', color: 'saddlebrown'},
        {name: 'Sesame Bun', color: 'sandybrown'},
        {name: 'Gluten Free Bun', color: 'peru'},
        {name: 'Lettuce Wrap', color: 'olivedrab'},
        {name: 'Beef Patty', color: '#3F250B'},
        {name: 'Soy Patty', color: '#3F250B'},
        {name: 'Black Bean Patty', color: '#3F250B'},
        {name: 'Chicken Patty', color: 'burlywood'},
        {name: 'Lettuce', color: 'lawngreen'},
        {name: 'Tomato', color: 'tomato'},
        {name: 'Bacon', color: 'maroon'},
        {name: 'Onion', color: 'lightyellow'},
        {name: 'Cheese', color: 'gold'}
    ]
    
    // function array for the burger stack
    //const burgerIngredients = []
    
    //const [Leftingredients, setLEftIngredients] = useState(ingredientsArray)

    const [myBurger, setIngredients] = useState([])

    
    const addToStack = (e) => {
        const ingName = e.target.innerText
        const ingColor = e.target.style.backgroundColor

        //helps with testing
        //console.log('what was clicked', e.target)
        console.log(`clicked on ${ingName} and it is ${ingColor}`)

        setIngredients(
            [{ name: ingName, color: ingColor }, ...myBurger] //includes and adds it on top to existing
        )
        console.log(myBurger)
    }
    
        // function to remove one item from the burger stack
    const removeFromStack = (e) => {

        const clickIndex = e.target.id
        // console.log('index of cliked item' , clickIndex)
        //get a copy of the current burger array
        const currBurger = myBurger.slice()
        console.log('slice of cliked item' , currBurger)
        //splice out the ingredient we click on from that copy
        currBurger.splice(clickIndex, 1)
        // console.log('copy after clicked item' , currBurger)
        // we'll set state with teh freshly updated copy
        setIngredients(currBurger)
    }
    
    // empties the burger ingred array allowing user to start over
    const clearBurger = () => {
        setIngredients([])
    }

    return (
        <>
            <div className="ingredientPane"> Ingredients
                <IngredientList 
                    ingredients={ingredientsArray}
                    add={addToStack}
                />
            </div>
                <BurgerStack 
        // ingredients={this.state.burgerIngredients}
                    ingredients={myBurger}
                    remove={removeFromStack}
                    clear={clearBurger}
                />
        </>
    )
    
}


// might not need with function component way
export default BurgerPane





