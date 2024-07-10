import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = ({ apartment }) => {
  return (
    <div className="Card-container">
      {apartment.map((item) => (
        <Link to={`/apartment/${item.id}`} className="Card" key={item.id}>
          <img src={item.cover} alt={item.title} />
          <h3>{item.title}</h3>
        </Link>
      ))}
    </div>
  );
};

Card.propTypes = {
  apartment: PropTypes.array.isRequired,
};

export default Card;
