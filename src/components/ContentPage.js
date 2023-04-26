import Card from "./Card";
import SearchBar from "./SearchBar";
import Loader from "./Loader";

export default function ContentPage(props) {
  const arrows = props.data !== undefined && (
    <div>
      {props.data.previous !== null && (
        <button
          className="arrow-button"
          onClick={() => {
            props.fetchFromUrl(props.data.previous);
          }}>
          &laquo;
        </button>
      )}
      {props.data.next !== null && (
        <button
          className="arrow-button"
          onClick={() => {
            props.fetchFromUrl(props.data.next);
          }}>
          &raquo;
        </button>
      )}
    </div>
  );

  const results = props.data !== undefined && (
    <p>Results: {props.data.count}</p>
  );

  const cards =
    props.data !== undefined && Array.isArray(props.data.results)
      ? props.data.results.map((element, index) => (
          <Card key={index} info={element} />
        ))
      : props.data !== undefined &&
        props.data.results.results.map((element, index) => (
          <Card key={index} info={element} />
        ));

  return (
    <div className="card-container">
      <SearchBar startUrl={props.startUrl} fetchFromUrl={props.fetchFromUrl} />
      {props.loader && <Loader />}
      {!props.loader && arrows}
      {!props.loader && results}
      {!props.loader && cards}
      {!props.loader && arrows}
    </div>
  );
}
