import React, { useState, useCallback, useEffect } from "react";

export default function People(props) {
  const [starShips, setStarships] = useState(undefined);
  const [vehicles, setVehicles] = useState(undefined);

  function getMovieTitle(id) {
    switch (id) {
      case 4:
        return "The Phantom Menace";
      case 5:
        return "Attack of the Clones";
      case 6:
        return "Revenge of the Sith";
      case 1:
        return "A New Hope";
      case 2:
        return "The Empire Strikes Back";
      case 3:
        return "Return of the Jedi";
      default:
        return "Unkown";
    }
  }

  async function getNameFromLink(link) {
    const response = await fetch(link);
    const data = await response.json();
    window.localStorage.setItem(link, JSON.stringify(data));
    return data.name;
  }

  function isUrlInCache(url) {
    for (let element in window.localStorage) {
      if (element === url) {
        return { found: true, data: window.localStorage[element] };
      }
    }
    return { found: false };
  }

  const getNamesFromList = useCallback(async (array, callback) => {
    const arr = [];
    for (let link of array) {
      if (isUrlInCache(link).found) {
        arr.push(JSON.parse(window.localStorage[link]).name);
      } else {
        arr.push(await getNameFromLink(link));
      }
    }
    callback(arr);
  }, []);

  function reGetVehiclesListInfo() {
    if (Array.isArray(props.info.vehicles)) {
      getNamesFromList(props.info.vehicles, setVehicles);
    }
    return null;
  }

  function reGetStarshipsListInfo() {
    if (Array.isArray(props.info.starships)) {
      getNamesFromList(props.info.starships, setStarships);
    }
    return null;
  }

  useEffect(() => {
    if (Array.isArray(props.info.starships)) {
      getNamesFromList(props.info.starships, setStarships);
    }
    if (Array.isArray(props.info.vehicles)) {
      getNamesFromList(props.info.vehicles, setVehicles);
    }
  }, [getNamesFromList, props.info.starships, props.info.vehicles]);

  return (
    <div className="card">
      <h3>Name: {props.info.name}</h3>
      <p>Gender: {props.info.gender}</p>
      <p>Height: {props.info.height} cm</p>
      <p>Weight: {props.info.mass} kg</p>
      <p>Hair color: {props.info.hair_color}</p>
      <p>Skin color: {props.info.skin_color}</p>
      <p>Eye color: {props.info.eye_color}</p>
      <p>Birth year: {props.info.birth_year}</p>
      <p>Films:</p>
      {props.info.films !== undefined && (
        <ul>
          {props.info.films.map((element, index) => {
            return (
              <li key={`${index}${props.info.name}`}>
                {getMovieTitle(
                  Number(
                    element.substring(element.length - 2, element.length - 1)
                  )
                )}
              </li>
            );
          })}
        </ul>
      )}
      {props.info.starships !== undefined &&
        props.info.starships.length > 0 && <p>Starships:</p>}
      {props.info.starships !== undefined && starShips !== undefined && (
        <ul>
          {props.info.starships.length !== starShips.length &&
            reGetStarshipsListInfo()}
          {starShips.map((element, index) => (
            <li key={element + index}>{element}</li>
          ))}
        </ul>
      )}
      {props.info.vehicles !== undefined && props.info.vehicles.length > 0 && (
        <p>Vehicles:</p>
      )}
      {props.info.vehicles !== undefined && vehicles !== undefined && (
        <ul>
          {props.info.vehicles.length !== vehicles.length &&
            reGetVehiclesListInfo()}
          {vehicles.map((element, index) => (
            <li key={element + index}>{element}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
