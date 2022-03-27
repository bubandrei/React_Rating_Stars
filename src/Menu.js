import React from "react";
import Recipe from "./Recipe";
import Stars from "./Star";



function Menu(props) {
    return (
      <>
        <h1>{props.title}</h1>
        <Stars/>
        <div>
          {props.data.map((item, i) => (
            <Recipe key={i} recipe={item} />))
          }
        </div>
      </>
    )
  }
  export default Menu