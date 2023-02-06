import React, { useState } from "react";


function Ingredient (props) {

        const { name, color } = this.props.ingredient
        return (
            <div
                style={{backgroundColor: color}}
                id={this.props.itemKey}
                onClick={this.props.clickFunc}
            >
                {name}
            </div>
        )

}

export default Ingredient
