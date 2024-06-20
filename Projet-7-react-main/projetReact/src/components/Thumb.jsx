import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Thumb = ({ appartement }) => {
  return (
    <div className="thumb-container">
      {appartement.map((item) => (
        <Link to={`/appartement/${item.id}`} className="thumb" key={item.id}>
          <img src={item.cover} alt={item.title} />
          <h3>{item.title}</h3>
        </Link>
      ))}
    </div>
  );
};

Thumb.propTypes = {
  appartement: PropTypes.array.isRequired,
};

export default Thumb;
