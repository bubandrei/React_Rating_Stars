import React from "react";

function Ingridient(props) {
    console.log(props)
  return (
    <React.Fragment>
      <div>{props.list.map((x, i) => (
        <li key={i}>{x.amount} {x.measurement} {x.name}</li>)
      )}</div>
    </React.Fragment>
  )
}
export default Ingridient