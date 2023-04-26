import React, { useState } from "react";

export default function Film(props) {
  const [crawlToggle, setCrawlToggle] = useState(false);

  function toggleSetCrawl() {
    setCrawlToggle(!crawlToggle);
  }
  return (
    <div className="card">
      <h3>Title: {props.info.title}</h3>
      <h4>Episode: {props.info.episode_id}</h4>
      {props.info.opening_crawl !== undefined && (
        <p onClick={toggleSetCrawl}>
          Opening crawl:{" "}
          {crawlToggle
            ? props.info.opening_crawl
            : props.info.opening_crawl.substring(0, 30) + "...Click to expand"}
        </p>
      )}
      <p>Director: {props.info.director}</p>
      <p>Producer: {props.info.producer}</p>
      <p>Release date: {props.info.release_date}</p>
    </div>
  );
}
