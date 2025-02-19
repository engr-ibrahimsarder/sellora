import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import usePublic from "../../../hooks/usePublic";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const [cart, refetch] = useCart();
  const axiosPublic = usePublic();
  const totalPrice = cart.reduce(
    (total, totalPrice) => total + totalPrice.price,
    0
  );
  const handleRemoveItem = (id) => {
    if (id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosPublic.delete(`/carts/${id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Delete Successfully!",
                showConfirmButton: false,
                timer: 1500,
              });
              refetch();
            }
          });
        }
      });
    }
  };
  return (
    <div>
      <div className="container mx-auto">
        <section className="grid md:grid-cols-3 gap-0 pt-32 pb-8 ">
          <div className="col-span-2 md:col-span-2 px-5 md:px-0">
            <div className="bg-gray-100">
              <div className="flex justify-between py-5  px-5">
                <h1>Shipping & Billing</h1>
                <Link to="" className="text-blue-500">
                  Edit
                </Link>
              </div>
              <div className="px-5 py-5 bg-white mb-5  rounded">
                <div className="flex gap-2">
                  <h1>Customer: {user.displayName}</h1>
                  <h2>Phone: </h2>
                </div>
                <div>
                  <h1>Address:</h1>
                </div>
              </div>
            </div>
            {cart.map((item, index) => (
              <div
                className="px-5 py-5 bg-white mb-5 flex justify-between items-center rounded"
                key={index}
              >
                <img className="h-28" src={item.img} alt="" />
                <h1>{item.name}</h1>
                <p className="text-orange-400">${item.price}</p>
                <p>
                  <button
                    onClick={() => handleRemoveItem(item._id)}
                    className="cursor-pointer "
                  >
                    <FaTrashAlt className="text-orange-400"></FaTrashAlt>
                  </button>
                </p>
              </div>
            ))}
          </div>

          <div className="col-span-1 md:col-span-1 rounded mb-0 bg-white px-5 py-5 h-76">
            <div className="flex justify-between mb-3">
              <h1>Invoice and Contact Info</h1>
              <Link className="text-blue-500" to="">
                Edit
              </Link>
            </div>
            <h1 className="text-xl">Order Summary</h1>

            <h3 className="flex justify-between mt-2">
              <span className="text-gray-600">Subtotal ({cart.length})</span>
              <span>${totalPrice}</span>
            </h3>
            <h3 className="flex justify-between">
              <span className="text-gray-600">Delivery Fee </span>
              <span>${cart.length * 60}</span>
            </h3>
            <hr className="text-gray-200 my-2" />
            <h3 className="flex justify-between">
              <span className="text-gray-600">Total </span>
              <span className="text-orange-500">
                ${totalPrice + cart.length * 60}
              </span>
            </h3>

            <p className="text-end text-sm">VAT included, where applicable</p>
            <div className="flex justify-center mt-5">
              <button className="uppercase bg-orange-500 text-white py-2 px-2 rounded cursor-pointer">
                Procheed To Pay ({cart.length})
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CheckOut;
