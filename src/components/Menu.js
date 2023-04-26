import { Link } from "react-router-dom";

export default function Menu(props) {
  return (
    <div className="menu-container">
      <Link
        to={"/sith-happens/people"}
        onClick={() => {     ///?page=1 to make localstorage work when switching pages (it thinks "/people" is a different page than "people/?page=1")
          props.handleClick(props.startUrl + "people/?page=1");
        }}>
        <button>People</button>
      </Link>

      <Link
        to={"/sith-happens/starships"}
        onClick={() => {
          props.handleClick(props.startUrl + "starships/?page=1");
        }}>
        <button>Starships</button>
      </Link>

      <Link
        to={"/sith-happens/vehicles"}
        onClick={() => {
          props.handleClick(props.startUrl + "vehicles/?page=1");
        }}>
        <button>Vehicles</button>
      </Link>

      <Link
        to={"/sith-happens/films"}
        onClick={() => {
          props.handleClick(props.startUrl + "films/?page=1");
        }}>
        <button>Films</button>
      </Link>

      <Link
        to={"/sith-happens/planets"}
        onClick={() => {
          props.handleClick(props.startUrl + "planets/?page=1");
        }}>
        <button>Planets</button>
      </Link>

      <Link
        to={"/sith-happens/species"}
        onClick={() => {
          props.handleClick(props.startUrl + "species/?page=1");
        }}>
        <button>Species</button>
      </Link>
    </div>
  );
}
