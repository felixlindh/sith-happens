export default function Planets(props) {
  return (
    <div className="card">
      <h3>Name: {props.info.name}</h3>
      <p>Population: {props.info.population}</p>
      <p>Climate: {props.info.climate}</p>
      <p>Terrain: {props.info.terrain}</p>
      <p>Surface Water: {props.info.surface_water}</p>
      <p>Diameter: {props.info.diameter}</p>
    </div>
  );
}
