import { useContext, useState } from "react";
import { FaBars, FaShoppingCart, FaTimes, FaUser } from "react-icons/fa";
import logo from "../../../assets/logo.png";
import CustomLink from "../../../CustomLink/CustomLink";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import { AiOutlineSearch } from "react-icons/ai";
import { IoGiftSharp } from "react-icons/io5";
import { Dropdown } from "flowbite-react";
import { PiSignOutBold } from "react-icons/pi";
import { MdStars } from "react-icons/md";
import usePublic from "../../../hooks/usePublic";
const Navbar = () => {
  const navigate = useNavigate();
  const [dbUser, setUser] = useState();
  const axiosPublic = usePublic();
  const [searchTerm, setSearchTerm] = useState("");
  const [cart] = useCart();
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const handleLogOut = () => {
    logOut();
    navigate("/login");
  };
  axiosPublic.get(`/users/${user?.email}`).then((res) => {
    setUser(res.data);
  });
  // Handle Search Function
  const handleSearch = () => {
    // const text = searchTerm.toUpperCase();
    navigate(`/product/${searchTerm}`);
  };

  // Handle Enter Key Press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  const navMenu = (
    <ul className="flex justify-center items-center md:flex-row flex-col  uppercase text-black md:text-white gap-5">
      <li>
        <CustomLink to="/">Home</CustomLink>
      </li>
      {dbUser ? (
        <p>
          <div>
            <Dropdown
              label={dbUser?.name}
              arrowIcon={false}
              inline
              className="cursor-pointer !important"
            >
              <Dropdown.Item>
                <ul>
                  <li className="flex gap-4 items-center my-3">
                    <FaUser className="text-xl text-gray-400"></FaUser>

                    <Link
                      to="/dashboard/manageaccount"
                      className="hover:text-orange-500 hover:underline"
                    >
                      Manage My Account
                    </Link>
                  </li>
                  <Dropdown.Divider />
                  <li className="flex gap-4 my-2 items-center">
                    <IoGiftSharp className="text-xl text-gray-400"></IoGiftSharp>

                    <Link
                      to="/dashboard/orders"
                      className="hover:text-orange-500 hover:underline"
                    >
                      My Orders
                    </Link>
                  </li>
                  <Dropdown.Divider />
                  <li className="flex gap-4 my-2 items-center">
                    <MdStars className="text-xl text-gray-400"></MdStars>

                    <Link className="hover:text-orange-500 hover:underline">
                      My Reviews
                    </Link>
                  </li>
                  <Dropdown.Divider />
                  <li
                    onClick={handleLogOut}
                    className="flex gap-4 my-2 items-center"
                  >
                    <PiSignOutBold className="text-xl text-gray-400"></PiSignOutBold>

                    <Link className="hover:text-orange-500 hover:underline">
                      Sign out
                    </Link>
                  </li>
                </ul>
              </Dropdown.Item>
            </Dropdown>
          </div>
        </p>
      ) : (
        <li>
          <CustomLink to="/ourShop">Our Shop</CustomLink>
        </li>
      )}
      <li>
        <CustomLink className="mr-4" to="/cart">
          <FaShoppingCart className="text-2xl mt-5"></FaShoppingCart>
          <div className="px-2 py-1 rounded-full bg-gray-300 text-orange-400 absolute top-52 lg:top-1  ml-3">
            +{cart.length}
          </div>
        </CustomLink>
      </li>
      {user ? (
        <button
          onClick={handleLogOut}
          style={{ color: "black" }}
          className="text-base uppercase cursor-pointer"
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
          <Link to="/">
            <img className="h-14" src={logo} alt="" />
          </Link>
          <div className="flex items-center w-full max-w-md border border-gray-300 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search in Sellora"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 p-2 outline-none"
            />
            <button
              onClick={handleSearch}
              className="p-3 bg-orange-500 text-white hover:bg-orange-600 transition cursor-pointer"
            >
              <AiOutlineSearch className="w-5 h-5" />
            </button>
          </div>
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
