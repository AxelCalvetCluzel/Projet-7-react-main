import { useParams, Navigate } from "react-router-dom";
import apartmentData from "../data.json";
import Slideshow from "./Slideshow.jsx";
import Rating from "./StarRating.jsx";
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
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isEquipmentOpen, setIsEquipmentOpen] = useState(false);

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  const toggleEquipment = () => {
    setIsEquipmentOpen(!isEquipmentOpen);
  };
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
      <div className="collapseContainer">
        <div className="collapse" onClick={toggleDescription}>
          <div className="collapseHeader">
            <span>Description</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className={`arrow ${isDescriptionOpen ? "open" : ""}`}
            >
              <path
                d="M14.7897 10.7897C15.4591 10.1202 16.5462 10.1202 17.2157 10.7897L27.4979 21.0719C28.1674 21.7414 28.1674 22.8285 27.4979 23.4979C26.8285 24.1673 25.7414 24.1673 25.072 23.4979L16 14.4259L6.92804 23.4926C6.25862 24.162 5.17148 24.162 4.50206 23.4926C3.83265 22.8231 3.83265 21.736 4.50206 21.0666L14.7843 10.7843L14.7897 10.7897Z"
                fill="white"
              />
            </svg>
          </div>
          {isDescriptionOpen && (
            <div className="collapseContent">{apartment.description}</div>
          )}
        </div>

        <div className="collapse" onClick={toggleEquipment}>
          <div className="collapseHeader">
            <span>Equipements</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className={`arrow ${isEquipmentOpen ? "open" : ""}`}
            >
              <path
                d="M14.7897 10.7897C15.4591 10.1202 16.5462 10.1202 17.2157 10.7897L27.4979 21.0719C28.1674 21.7414 28.1674 22.8285 27.4979 23.4979C26.8285 24.1673 25.7414 24.1673 25.072 23.4979L16 14.4259L6.92804 23.4926C6.25862 24.162 5.17148 24.162 4.50206 23.4926C3.83265 22.8231 3.83265 21.736 4.50206 21.0666L14.7843 10.7843L14.7897 10.7897Z"
                fill="white"
              />
            </svg>
          </div>
          {isEquipmentOpen && (
            <div className="collapseContent">
              <ul className="equipmentList">
                {apartment.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Apartment;
