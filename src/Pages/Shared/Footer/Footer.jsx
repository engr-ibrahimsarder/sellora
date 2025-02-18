import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-300 mt-24">
      <div className="container mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 static bottom-0 pt-10 pb-16">
        <div className="flex flex-col ">
          <Link to="">Home</Link>
          <Link to="">Home</Link>
          <Link to="">Home</Link>
        </div>
        <div className="flex flex-col">
          <Link to="">Home</Link>
          <Link to="">Home</Link>
          <Link to="">Home</Link>
        </div>
        <div className="flex flex-col">
          <Link to="">Home</Link>
          <Link to="">Home</Link>
          <Link to="">Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
