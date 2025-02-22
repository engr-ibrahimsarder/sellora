import { Link, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-gray-200 h-full">
      <Navbar></Navbar>
      <div className="pt-32 flex gap-3 container mx-auto">
        <section className="w-72">
          <h1 className="text-center">hello, {user?.displayName}</h1>
          <ul className="text-center py-5">
            <li>
              <Link to="/dashboard/manageaccount" className="text-blue-400">
                Manage My Account
              </Link>
            </li>
            <li>
              <Link to="/dashboard/profile" className="">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/dashboard/manageaccount" className="">
                Address Book
              </Link>
            </li>
            <li>
              <Link to="/dashboard/orders" className="text-blue-400">
                My Orders
              </Link>
            </li>
            <li>
              <Link to="/dashboard/manageaccount" className="text-blue-400">
                My Reviews
              </Link>
            </li>
          </ul>
        </section>
        <section className="w-full">
          <Outlet></Outlet>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
