import React, { useState } from "react";
import "./BeerCard.css"

const BeerCard = ({ beer }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="beer-card">
      <img src={beer.image_url} alt={beer.name} className="beer-image" />
      <div className="beer-details">
        <h3>{beer.name}</h3>
        <p>
          <strong>{beer.tagline}</strong>
        </p>
        <div>
          <span className="abv-chip">ABV: {beer.abv}%</span>
          <span className="first-brewed-chip">
            First Brewed: {beer.first_brewed}
          </span>
          <span className="ibu-chip">IBU: {beer.ibu}</span>
        </div>
        <p className="description">
          <strong>Description:</strong>
          {expanded
            ? beer.description
            : beer.description.substring(0, 80) + "... "}
          {expanded ? (
            <span className="read-more" onClick={toggleDescription}>
              Read Less
            </span>
          ) : (
            <span className="read-more" onClick={toggleDescription}>
              Read More
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default BeerCard;
