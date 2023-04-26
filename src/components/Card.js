import React from "react";
import People from "./People";
import Starships from "./Starships";
import { Routes, Route } from "react-router-dom";
// import Vehicles from "./Vehicles";
import Film from "./Film";
import Planets from "./Planets";
import Species from "./Species";

export default function Card(props) {
  return (
    <Routes>
      <Route path="/sith-happens/">
        <Route index element={null} />
        <Route path="people" element={<People info={props.info} />}></Route>
        <Route
          path="starships"
          element={<Starships info={props.info} />}></Route>
        <Route
          path="vehicles"
          element={<Starships info={props.info} />}></Route>
        <Route path="films" element={<Film info={props.info} />}></Route>
        <Route path="planets" element={<Planets info={props.info} />}></Route>
        <Route path="species" element={<Species info={props.info} />}></Route>
      </Route>
    </Routes>
  );
}
