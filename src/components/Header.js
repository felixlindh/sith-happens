export default function Header() {
  return (
    <header className="header">
      <img className="header-img" src={process.env.PUBLIC_URL + "/star-wars-at.jpg"} alt="AT-img" />
      <h1>SWAPI</h1>
    </header>
  );
}
