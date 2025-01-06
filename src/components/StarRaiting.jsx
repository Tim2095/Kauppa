import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    if (index < Math.floor(rating)) {
      // Full star
      return (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          className="text-yellow-500"
        />
      );
    } else if (index < rating) {
      // Half star
      return (
        <FontAwesomeIcon
          key={index}
          icon={faStarHalfAlt}
          className="text-yellow-500"
        />
      );
    } else {
      // Empty star
      return (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          className="text-gray-300"
        />
      );
    }
  });

  return <div className="flex justify-center mb-2">{stars}</div>;
};


export default StarRating