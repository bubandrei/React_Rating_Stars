import React from "react";
import Ingridient from "./Ingridients";
import Instruction from "./Instructions";

function Recipe(props) {
  return (
    <React.Fragment>
      <h2>{props.recipe.name}</h2>
      <Ingridient list={props.recipe.ingredients} />
      <Instruction instr={props.recipe} />
    </React.Fragment>
  )
}
export default Recipe