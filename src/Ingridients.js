import React from "react";

function Ingridient(props) {
    console.log(props)
  return (
    <React.Fragment>
      <div>{props.list.map((element, i) => (
        <li key={i}>{element.amount} {element.measurement} {element.name}</li>)
      )}</div>
    </React.Fragment>
  )
}
export default Ingridient