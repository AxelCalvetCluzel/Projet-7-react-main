import { useParams, Navigate } from "react-router-dom";
import appartementData from "../data.json";
import Slideshow from "../components/Slideshow.jsx";
import Rating from '../components/StarRating.jsx';

const findAppartement = (id) => {
  return appartementData.find((appartement) => appartement.id === id);
};

const Appartement = () => {
  const { id } = useParams();
  const appartement = findAppartement(id);

  if (!appartement) {
    return <Navigate to="*" />;
  }

  return (
    <div className="appartement">
      <Slideshow pictures={appartement.pictures} />

      <div className="containerInfos">
        <div className="firstInfos">
          <h2>{appartement.title}</h2>
          <p>{appartement.location}</p>
          <div className="tags">
            {appartement.tags.map((tag, index) => (
              <button key={index}>{tag}</button>
            ))}
          </div>
        </div>

        <div className="secondInfos"></div>
        <div className="host">
          <img
            className="hostPicture"
            src={appartement.host.picture}
            alt={appartement.host.name}
          />
        </div>
      </div>
      <div className="dropdownContainer">
        <div className="dropdown"></div>
        <span>Description</span>
        <h3>{appartement.description}</h3>
        <span>Equipements</span>
        <h3>{appartement.equipments}</h3>
      </div>
      
    </div>
  );
};

export default Appartement;
