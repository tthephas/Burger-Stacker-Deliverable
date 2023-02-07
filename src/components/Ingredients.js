// import React, { useState } from "react";


const Ingredient = (props) => {

    const { name, color } = props.ingredient
    return (
        <div
            style={{backgroundColor: color}}
            id={props.itemKey}
            onClick={props.clickFunc}
        >
            {name}
        </div>
    )

}

export default Ingredient
