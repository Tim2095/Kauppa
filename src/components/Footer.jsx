import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="bg-secondary pt-4">
        <div className="pl-4 mb-5">
          <h3 className="mb-4 font-bold text-2xl font-anton tracking-wider">
            SHOP.CO
          </h3>
          <p>
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
        </div>
        <div className="flex gap-3 pl-4">
          <div>
            <FontAwesomeIcon icon={faXTwitter} />
          </div>
          <div>
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          <div>
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div>
            <FontAwesomeIcon icon={faGithub} />
          </div>
        </div>
        <div>
          <div className="flex ml-4 justify-between mb-6 mt-6">
            <div>
              <ul className="flex flex-col gap-4 text-sm">
                <li className="tracking-widest uppercase font-bold">Company</li>
                <li>About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Career</li>
              </ul>
            </div>
            <div className="w-[50%]">
              <ul className="flex flex-col gap-4 text-sm">
                <li>Help</li>
                <li>Customer Support</li>
                <li>Delivery Details</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="flex ml-4 justify-between ">
            <div>
              <ul className="flex flex-col gap-4 text-sm">
                <li>FAQ</li>
                <li>Account</li>
                <li>Manage Deliveries</li>
                <li>Orders</li>
                <li>Payment</li>
              </ul>
            </div>
            <div className="w-[50%]">
              <ul className="flex flex-col gap-4 text-sm">
                <li>Resources</li>
                <li>Free eBook</li>
                <li>Development Tutorial</li>
                <li>How to - Blog</li>
                <li>Youtube Playlist</li>
              </ul>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
