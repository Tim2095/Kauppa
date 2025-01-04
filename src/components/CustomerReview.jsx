import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef } from "react";

const CustomerReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const reviews = [
    { text: "This product is amazing!", author: "John Doe" },
    { text: "Excellent customer service", author: "Jane Smith" },
    { text: "Highly recommend this company.", author: "Alice Brown" },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : reviews.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < reviews.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-12">
      <div className="flex justify-between items-center">
        <div className=" font-anton font-bold ">
          <h2>OUR HAPPY CUSTOMERS</h2>
        </div>
        <div>
          <button id="prev" onClick={handlePrev} className="p-3 ">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button id="next" onClick={handleNext} className="p-3 ">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        id="carousel"
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        ref={carouselRef}
      >
        {reviews.map((review, index) => (
          <div key={index} className="min-w-full p-6 rounded-lg shadow-md">
            <p className="text-lg font-semibold">{`"${review.text}"`}</p>
            <p className="text-gray-500 mt-2">- {review.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
