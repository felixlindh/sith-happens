export default function Species(props) {
  return (
    <div className="card">
      <h3>Name: {props.info.name}</h3>
      <p>Classification: {props.info.classification}</p>
      <p>Designation: {props.info.designation}</p>
      <p>Skin colors: {props.info.skin_colors}</p>
      <p>Hair colors: {props.info.hair_colors}</p>
      <p>Eye colors: {props.info.eye_colors}</p>
      <p>Language: {props.info.language}</p>
      <p>Avg height: {props.info.average_height}</p>
    </div>
  );
}
