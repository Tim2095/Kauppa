import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import StarRating from "./StarRaiting";

const CustomerReview = () => {
  const sliderRef = useRef(null);

  const reviews = [
    { text: "This product is amazing!", author: "John Doe", rating: 5 },
    { text: "Excellent customer service", author: "Jane Smith", rating: 4 },
    {
      text: "Highly recommend this company.",
      author: "Alice Brown",
      rating: 5,
    },
    {
      text: "Great quality and fast delivery.",
      author: "Emma Wilson",
      rating: 4,
    },
    { text: "Outstanding experience!", author: "Michael Scott", rating: 5 },
    {
      text: "Value for money, just a little pricey.",
      author: "Chris Evans",
      rating: 4.7,
    },
    {
      text: "Good overall, but room for improvement.",
      author: "Scarlett Johansson",
      rating: 4.3,
    },
    {
      text: "Nearly perfect! Highly satisfied.",
      author: "Robert Downey Jr.",
      rating: 4.9,
    },
    {
      text: "Decent product with slight flaws.",
      author: "Natasha Romanoff",
      rating: 4.5,
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto p-4">
      {/* Custom Arrow Buttons */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-center text-xl font-bold mb-4">
          OUR HAPPY CUSTOMERS
        </h2>
        <div>
          <button
            onClick={() => sliderRef.current.slickPrev()} // Trigger slider's prev method
            className="  p-3 rounded-full"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()} // Trigger slider's next method
            className=" p-3 rounded-full"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings} className="border-2 rounded-md">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg text-center h-40"
          >
            <StarRating rating={review.rating} />
            <p className="text-lg font-semibold text-gray-700">{`"${review.text}"`}</p>
            <p className="text-sm text-gray-500 mt-2">- {review.author}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomerReview;
