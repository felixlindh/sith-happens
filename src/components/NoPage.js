import { Link } from "react-router-dom";

export default function NoPage(props) {
  return (
    <div className="no-page-screen">
      <h2>Page not found!</h2>
      <Link to={"/sith-happens"}>
        <button
          onClick={() => {
            props.setPageFound(true);
          }}>
          Home page
        </button>
      </Link>
    </div>
  );
}
