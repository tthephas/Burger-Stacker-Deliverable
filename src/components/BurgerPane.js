import React, {Component} from "react";
import BurgerStack from "./BurgerStack";
import IngredientList from "./IngredientList";

class BurgerPane extends Component {
    state = {
        ingredients: [
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
        ],
        burgerIngredients: []
    }
    
    addToStack = (e) => {
        const ingName = e.target.innerText
        const ingColor = e.target.style.backgroundColor

        //helps with testing
        //console.log('what was clicked', e.target)
        console.log(`clicked on ${ingName} and it is ${ingColor}`)

        this.setState({
            burgerIngredients: [
                { name: ingName, color: ingColor },
                ...this.state.burgerIngredients //includes and adds it on top to existing
            ]
        })
    }
    
        // function to remove one item from the burger stack
        removeFromStack = (e) => {
            console.log('the original stack ', this.state.burgerIngredients)
            const clickIndex = e.target.id
            console.log('index of cliked item' , clickIndex)
            //get a copy of the current burger array
            const currBurger = this.state.burgerIngredients.slice()
            console.log('slice of cliked item' , currBurger)
            //splice out the ingredient we click on from that copy
            currBurger.splice(clickIndex, 1)
            console.log('copy after clicked item' , currBurger)
            // we'll set state with teh freshly updated copy
            this.setState({
                burgerIngredients: currBurger
            })
        }
    
        // empties the burger ingred array allowing user to start over
        clearBurger = () => {
            this.setState({
                burgerIngredients: []
            })
        }
    
    
    
    render () { 



        return (
            <>
            <div className="ingredientPane"> Ingredients

            <IngredientList 
            
            ingredients={this.state.ingredients}
                    add={this.addToStack}
            />
            </div>
            <BurgerStack 
            
            ingredients={this.state.burgerIngredients}
            remove={this.removeFromStack}
            clear={this.clearBurger}
            />


            </>
        )
    }
}



export default BurgerPane





