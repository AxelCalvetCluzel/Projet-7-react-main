import { useParams, Navigate } from "react-router-dom";
import apartmentData from "../data.json";
import Slideshow from "./Slideshow.jsx";
import Rating from "./StarRating.jsx";
import Collapse from "./Collapse.jsx";
import React, { useState } from "react";

const findApartment = (id) => {
  return apartmentData.find((apartment) => apartment.id === id);
};

const Apartment = () => {
  const { id } = useParams();
  const apartment = findApartment(id);

  if (!apartment) {
    return <Navigate to="*" />;
  }

  return (
    <div className="apartment">
      <Slideshow pictures={apartment.pictures} />

      <div className="containerInfos">
        <div className="firstInfos">
          <h2>{apartment.title}</h2>
          <p>{apartment.apartment}</p>
          <div className="tags">
            {apartment.tags.map((tag, index) => (
              <button key={index}>{tag}</button>
            ))}
          </div>
        </div>

        <div className="secondInfos">
          <div className="host">
            <p>
              <span className="hostFirstName">
                {apartment.host.name.split(" ")[0]}
              </span>
              <span className="hostLastName">
                {apartment.host.name.split(" ")[1]}
              </span>
            </p>
            <img
              className="hostPicture"
              src={apartment.host.picture}
              alt={apartment.host.name}
            />
          </div>
          <Rating rating={parseInt(apartment.rating)} />
        </div>
      </div>
      <div className="collapseContainer2">
        <Collapse title="Description" content={apartment.description} />
        <Collapse
          title="Equipements"
          content={
            <ul className="equipmentList">
              {apartment.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default Apartment;
