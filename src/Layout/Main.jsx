import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const hideNavbarAndFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      {hideNavbarAndFooter || <Navbar></Navbar>}
      <div className="bg-gray-200">
        <Outlet></Outlet>
      </div>
      {hideNavbarAndFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
