import { useParams, Navigate } from "react-router-dom";
import appartementData from "../data.json";
import Slideshow from "../components/Slideshow.jsx";

const findAppartement = (id) => {
  return appartementData.find((appartement) => appartement.id === id);
};

const Appartement = () => {
  const { id } = useParams();
  const appartement = findAppartement(id);

  if (!appartement) {
    return <Navigate to="*" />;
  }

  const pictures = appartement.pictures;

  return (
    <div>
      <p>L'appartement avec l'ID {id}</p>
      <p>Le titre de l'appartement: {appartement.title}</p>
      <p>La description: {appartement.description}</p>
      <div className="pictures">
        <Slideshow pictures={pictures} />
      </div>
    </div>
  );
};

export default Appartement;
