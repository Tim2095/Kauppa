import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const CustomerReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  const reviews = [
    { text: "This product is amazing!", author: "John Doe" },
    { text: "Excellent customer service", author: "Jane Smith" },
    { text: "Highly recommend this company.", author: "Alice Brown" },
    { text: "Great quality and fast delivery.", author: "Emma Wilson" },
    { text: "Outstanding experience!", author: "Michael Scott" },
  ];

  // Update itemsPerView based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      setItemsPerView(window.innerWidth >= 1024 ? 3 : 1);
    };

    // Set initial value
    updateItemsPerView();

    // Add resize listener
    window.addEventListener("resize", updateItemsPerView);

    // Clean up listener on unmount
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      Math.max(prevIndex - 1, 0)
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, reviews.length - itemsPerView)
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-12">
      {/* Header */}
      <div className="flex justify-between items-center px-4">
        <div className="font-anton font-bold">
          <h2>OUR HAPPY CUSTOMERS</h2>
        </div>
        <div>
          <button id="prev" onClick={handlePrev} className="p-3">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button id="next" onClick={handleNext} className="p-3">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden">
        <div
          id="carousel"
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${(100 / itemsPerView) * currentIndex}%)` }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 p-6 rounded-lg shadow-md border-2 mx-4"
              style={{ flexBasis: `${100 / itemsPerView}%` }}
            >
              <p className="text-lg font-semibold">{`"${review.text}"`}</p>
              <p className="text-gray-500 mt-2">- {review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
