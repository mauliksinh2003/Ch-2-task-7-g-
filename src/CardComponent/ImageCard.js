import React from "react";

function ImageCard(prop) {
  return (
    <div>
      <img style={{ width: "100%" }} src={prop.Image}/>
    </div>
  );
}

export default ImageCard ;