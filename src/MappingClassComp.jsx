import React from "react";

const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

export default function MappingClassComp() {
  return (
    <>
      {planets.map((planet, index) => (
        <li key={index}>{planet}</li>
      ))}
    </>
  );
}
// export default mappingClassComp
