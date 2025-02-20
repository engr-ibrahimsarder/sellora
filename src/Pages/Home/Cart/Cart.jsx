import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import usePublic from "../../../hooks/usePublic";
import { Link } from "react-router-dom";
const Cart = () => {
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
        {cart?.length > 0 ? (
          <section className="grid md:grid-cols-3 gap-0 pt-32 pb-8 ">
            <div className="col-span-2 md:col-span-2 px-5 md:px-0">
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
                      <FaTrashAlt className="text-gray-600 text-xl"></FaTrashAlt>
                    </button>
                  </p>
                </div>
              ))}
            </div>
            {cart.length > 0 ? (
              <div className="col-span-1 md:col-span-1 rounded mb-0 bg-white px-5 py-5 h-56">
                <h1 className="text-xl">Order Summary</h1>
                <hr className="text-gray-200 my-2" />
                <h3 className="flex justify-between mt-2">
                  <span className="text-gray-600">
                    Subtotal ({cart.length})
                  </span>
                  <span>${totalPrice}</span>
                </h3>
                <h3 className="flex justify-between">
                  <span className="text-gray-600">Shipping Fee </span>
                  <span>${cart.length * 2}</span>
                </h3>
                <h3 className="flex justify-between">
                  <span className="text-gray-600">Total </span>
                  <span className="text-orange-500">
                    ${totalPrice + cart.length * 2}
                  </span>
                </h3>
                <div className="flex justify-center mt-5">
                  <Link to="/checkout">
                    <button className="uppercase bg-orange-500 text-white py-2 px-2 rounded cursor-pointer">
                      Procheed To Checkout ({cart.length})
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <></>
            )}
          </section>
        ) : (
          <section className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-gray-600">There are no items in this cart</h1>
            <Link
              className="border-2 border-orange-400 px-2 py-2 mt-2 hover:bg-orange-200 rounded text-orange-400"
              to="/ourShop"
            >
              Continue Shopping
            </Link>
          </section>
        )}
      </div>
    </div>
  );
};

export default Cart;
