import React, { useState } from "react";
import { Detail } from "../models/Detail";

const Details = ({ recipe }: { recipe: Detail }) => {
  return (
    <div className="details">
      <img
        src={recipe.image_url}
        alt={recipe.name}
        className="details__image"
      />
      <p className="details__title">{recipe.name}</p>
      <p className="details__abv">ABV {recipe.abv}%</p>
      <p className="details__description">{recipe.description}</p>
      <p className="details__text">Tagline: {recipe.tagline}</p>
      <p className="details__text">First Brewed: {recipe.first_brewed}</p>
      <p className="details__list">
        Goes good with:
        {recipe.food_pairing.map((food, idx) => (
          <span key={idx} className="details__item">
            {food}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Details;
