import React from "react";

const InputSearch = props => (
  <div>
    <input
      className="inputID"
      placeholder="type your id github here..."
      value={props.input}
      name={props.name}
      onChange={props.handleInputChange}
    />
    {/* <button onClick={props.handleSubmit}>get repository</button> */}
  </div>
);

export default InputSearch;
