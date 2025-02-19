import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import googlePlay from "../../../assets/app/google-play.png";
import playStore from "../../../assets/app/play-store.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className="bg-gray-300 mt-0">
        <div className="container mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 static bottom-0 pt-10 pb-16 px-10 md:px-0">
          <div className="flex flex-col text-blue-800">
            <h1>Customer Care</h1>
            <Link className="hover:underline" to="">
              Help Center
            </Link>
            <Link className="hover:underline" to="">
              How to Buy
            </Link>
            <Link className="hover:underline" to="">
              Returns & Refunds
            </Link>
            <Link className="hover:underline" to="">
              Contact Us
            </Link>
            <Link className="hover:underline" to="">
              Terms & Conditions
            </Link>
            <Link className="hover:underline" to="">
              CCMS - Central Complain Management System
            </Link>
          </div>
          <div className="flex flex-col text-blue-800">
            <h1>Sellora</h1>
            <Link className="hover:underline" to="">
              About Sellora
            </Link>

            <Link className="hover:underline" to="">
              Digital Payments
            </Link>
            <Link className="hover:underline" to="">
              Sellora Blog
            </Link>
            <Link className="hover:underline" to="">
              Sellora Mart Privacy Policy
            </Link>
            <Link className="hover:underline" to="">
              Sellora Exclusives
            </Link>
            <Link className="hover:underline" to="">
              Sellora Donates
            </Link>
            <Link className="hover:underline" to="">
              Sellora University
            </Link>
            <Link className="hover:underline" to="">
              Sell on Sellora
            </Link>
            <Link className="hover:underline" to="">
              Code of Conduct
            </Link>
            <Link className="hover:underline" to="">
              Join the Sellora
            </Link>
            <Link className="hover:underline" to="">
              Affiliate Program
            </Link>
          </div>
          <div className="flex flex-col">
            <p>
              {" "}
              <img className="h-14" src={logo} alt="" />
            </p>
            <p className="text-orange-400 pl-0 md:pl-10">Happy Shoping</p>
            <p className="text-blue-800 pl-0 md:pl-10">Download App</p>
          </div>
          <div className="flex flex-col">
            <p>
              {" "}
              <Link>
                <img className="h-14" src={googlePlay} alt="" />
              </Link>
            </p>
            <p className="my-3">
              {" "}
              <Link>
                <img className="h-14" src={playStore} alt="" />
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="my-5">
        <section>
          <h1 className="text-center text-gray-800"> &copy; Sellora {year}</h1>
        </section>
        <section className="text-orange-400 flex gap-2 justify-center md:justify-end container mx-auto text-xl">
          <Link to="">
            <FaFacebook />
          </Link>
          <Link to="">
            <FaInstagramSquare />
          </Link>
          <Link to="">
            <FaSquareXTwitter />
          </Link>
          <Link to="">
            <FaYoutube />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Footer;
