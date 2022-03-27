import React from "react";
import Recipe from "./Recipe";



function Menu(props) {
    return (
      <>
        <h1>{props.title}</h1>
        <div>
          {props.data.map((item, i) => (
            <Recipe key={i} recipe={item} />))
          }
        </div>
      </>
    )
  }
  export default Menu