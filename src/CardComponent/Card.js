import React from "react";
import TextCard from "./TextCard";
import ImageCard from "./ImageCard";

export default function Cardss() {
  return (
    <>
      <h1 style={{textDecoration : "underline" , fontFamily : "cursive" }}>
        Mercedes Amg Series
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{
            width: "70rem",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "silver",
            padding: "1rem",
          }}
        >
          <ImageCard
            Image="https://static.autox.com/uploads/2023/04/Mercedes-AMG-GT-63-S-E-Performance-Logo.jpg"
            alt="image"
          />
          <TextCard
            Title="Unique feature"
            Text="Vehicles in the Mercedes-AMG® series feature custom interiors with features like prominent AMG® badges, upgraded upholstery, including high-quality leather, custom trim, including wood accents, premium sound systems, premium navigation systems, custom racing seats, custom AMG® floor mats, and driver assist features ..."
          />
        </div>
      </div>
    </>
  );
}