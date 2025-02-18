import { useContext, useState } from "react";
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";
import logo from "../../../assets/logo.png";
import CustomLink from "../../../CustomLink/CustomLink";
import { AuthContext } from "../../../Providers/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const handleLogOut = () => {
    logOut();
  };
  const navMenu = (
    <ul className="flex justify-center items-center md:flex-row flex-col  uppercase text-black md:text-white gap-5">
      <li>
        <CustomLink to="/">Home</CustomLink>
      </li>
      <li>
        <CustomLink to="/ourShop">Our Shop</CustomLink>
      </li>
      <li>
        <CustomLink to="/dashboard">Dashboard</CustomLink>
      </li>
      <li>
        <CustomLink className="mr-4" to="/dashboard/cart">
          <FaShoppingCart className="text-2xl mt-5"></FaShoppingCart>
          <div className="px-2 py-1 rounded-full bg-gray-300 text-orange-400 absolute top-52 lg:top-1  ml-3">
            +0
          </div>
        </CustomLink>
      </li>
      {user ? (
        <button
          onClick={handleLogOut}
          style={{ color: "black" }}
          className="text-base uppercase"
        >
          LogOut
        </button>
      ) : (
        <li>
          <CustomLink to="/login">Login</CustomLink>
        </li>
      )}
    </ul>
  );
  return (
    <div>
      <nav className="bg-orange-600 shadow-md fixed w-full z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="text-xl font-bold text-blue-600">
            <img className="h-14" src={logo} alt="" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">{navMenu}</div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-200 py-2 shadow-md">{navMenu}</div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
