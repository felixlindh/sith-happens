export default function Vehicles(props) {
  return (
    <div className="card">
      <h3>Name: {props.info.name}</h3>
      <p>Model: {props.info.model}</p>
      <p>Manufacturer: {props.info.manufacturer}</p>
    </div>
  );
}
