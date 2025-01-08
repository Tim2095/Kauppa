import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
const SubscribeNews = () => {
  const emailRef = useRef();

  const subscribeButtonHandler = () => {
    if (emailRef.current.value) {
      alert(
        "Thank you! You subscrebed to our news letter!" + emailRef.current.value
      );
      emailRef.current.value = ''
    } else {
      alert("Please enter your email address!");
    }
  };

  return (
    <div className=" pl-4 pr-4">
      <div className="bg-dark flex-flex-col pt-7 pb-8 rounded-lg">
        <div>
          <h2 className="text-primary text-center pl-8 pr-9 text-3xl font-bold font-anton tracking-wider">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>
        </div>
        <div className="text-center">
          <div className="pl-6 pr-6 my-6 relative ">
            <input
              type="email"
              placeholder="Enter your email address"
              className=" px-10 py-2 w-full rounded-2xl relative"
              ref={emailRef}
            />
            <FontAwesomeIcon
              icon={faEnvelope}
              className="absolute top-1/2 left-9 transform -translate-y-1/2 text-gray-500"
            />
          </div>
          <div className="my-3 pl-6 pr-6 ">
            <button
              onClick={subscribeButtonHandler}
              className=" bg-primary text-dark py-3 w-full rounded-2xl text-sm font-dmSans"
            >
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeNews;
