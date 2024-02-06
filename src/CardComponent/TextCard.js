import React from "react";

function TextCard(prop) {
  return (
    <div>
      <h1>{prop.Title}</h1>
      <p>{prop.Text}</p>
    </div>
  );
}

export default TextCard ;