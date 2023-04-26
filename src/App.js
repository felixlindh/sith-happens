import React, { useState, useEffect, useRef } from "react";
import NoPage from "./components/NoPage";
import Header from "./components/Header";
import Menu from "./components/Menu";
import ContentPage from "./components/ContentPage";
import "./style.css";

const startUrl = "https://swapi.dev/api/";

export default function App() {
  const [currentData, setCurrentData] = useState(undefined);
  const [loader, setLoader] = useState(false);
  const [pageFound, setPageFound] = useState(false);
  const mounted = useRef(false);

  async function fetchFromUrl(url) {
    setLoader(true);
    const check = isUrlInCache(url);
    if (check.found) {
      setCurrentData(JSON.parse(check.data));
    } else {
      const response = await fetch(url);
      const data = await response.json();
      setCurrentData(data);
      window.localStorage.setItem(url, JSON.stringify(data));
    }
    setLoader(false);
  }

  function isUrlInCache(url) {
    for (let element in window.localStorage) {
      if (element === url) {
        return { found: true, data: window.localStorage[element] };
      }
    }
    return { found: false };
  }
  //This code runs when you navigate with either changing the url in the browser or going backwards/forward
  function refreshData() {
    if (
      !window.location.pathname.endsWith("sith-happens") &&
      !window.location.pathname.endsWith("sith-happens/")
    ) {
      const arr = window.location.pathname.split("/");
      switch (arr[arr.length - 1]) {
        case "people":
        case "starships":
        case "vehicles":
        case "films":
        case "planets":
        case "species":
          fetchFromUrl(startUrl + arr[arr.length - 1] + "/?page=1");
          setPageFound(true);
          break;
        default:
          setPageFound(false);
      }
    } else {
      setPageFound(true);
      setCurrentData(undefined);
    }
  }
  //this code only runs once, adds event listener for moving backwards and forward
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      window.addEventListener("popstate", refreshData);
      refreshData();
    }
  });

  return (
    <div className="app-container">
      <Header />
      {!pageFound && <NoPage setPageFound={setPageFound} />}
      {pageFound && <Menu startUrl={startUrl} handleClick={fetchFromUrl} />}
      {pageFound && (
        <ContentPage
          loader={loader}
          startUrl={startUrl}
          data={currentData}
          fetchFromUrl={fetchFromUrl}
        />
      )}
    </div>
  );
}
