
import { useParams } from "react-router-dom";
import appartement from "../data.json";

const findAppartement = (id) => {
    return appartement.find((appartement) => appartement.id === id);
}

const Appartement = () => {
    const { id } = useParams();
    const appartement = findAppartement(id);
    return (
        <div>
            <p>voici l'appartement avec l'id {id}</p>
            <p>voici le titre de l'appartement {appartement.title}</p>
        </div>
    );
};

export default Appartement;