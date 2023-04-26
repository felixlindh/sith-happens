export default function Starships(props) {
  return (
    <div className="card">
      <h3>Name: {props.info.name}</h3>
      <p>Model: {props.info.model}</p>
      <p>Manufacturer: {props.info.manufacturer}</p>
      <p>Maximum passangers: {props.info.passengers}</p>
      <p>Cargo capacity: {props.info.cargo_capacity} kg</p>
      <p>Cost in credits: {props.info.cost_in_credits}</p>
      <p>Max atmosphering speed: {props.info.max_atmosphering_speed}</p>
      <p>Consumables: {props.info.consumables}</p>
    </div>
  );
}
