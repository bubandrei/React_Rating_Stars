import React from "react";

function Instruction(props) {
  return (
    <React.Fragment>
      <h4>{props.instr.steps}</h4>
    </React.Fragment>
  )
}
export default Instruction