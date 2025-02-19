import { useNavigate, useParams } from "react-router-dom";
import useProduct from "../../../hooks/useProduct";
import { Button } from "flowbite-react";
import useCart from "../../../hooks/useCart";
import usePublic from "../../../hooks/usePublic";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import Rating from "../../../Components/Rating";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product] = useProduct(productId);
  const navgate = useNavigate();
  const [, refetch] = useCart();
  const axiosPublic = usePublic();
  const { user } = useContext(AuthContext);
  const { name, img, price, ratings, ratingsCount, _id } = product;
  const total = product.price + 300;
  const part = 300;
  const percentage = (part / total) * 100;
  const roundedPercentage = percentage.toFixed(2);
  const handleSingleFood = () => {
    if (!user?.email && !user) {
      Swal.fire({
        title: "You are not logeed In",
        text: "Please login add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navgate("/login");
        }
      });
    } else {
      const foodData = {
        email: user?.email,
        productId: _id,
        name,
        img,
        price,
      };
      axiosPublic.post("/carts", foodData).then((res) => {
        if (res.data.acknowledged) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${name} add to card Successfully!`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    }
  };
  return (
    <div className="container mx-auto">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-24 px-10 md:px-0 bg-white px-2 py-2">
        <div className="mt-24">
          <img className="h-96" src={img} alt="" />
        </div>
        <div className="mt-32">
          <h1>{name}</h1>
          <div className="flex justify-start text-gray-400 items-center gap-3">
            <Rating totalStars={ratings}></Rating>
            <h3>({ratingsCount})</h3>
          </div>
          <p className="text-orange-400">${price}</p>
          <div className="flex gap-5">
            <p className="line-through">${product.price + 300}</p>
            <p>-{roundedPercentage}%</p>
          </div>
          <div className="flex gap-5 mt-5">
            <Button
              gradientDuoTone="purpleToBlue"
              className="!bg-gradient-to-r !from-purple-500 !to-blue-500 hover:!bg-gradient-to-r hover:!from-purple-500 hover:!to-blue-500 cursor-pointer"
            >
              Buy Now
            </Button>
            <Button
              onClick={handleSingleFood}
              gradientDuoTone="pinkToOrange"
              className="!bg-gradient-to-r !from-pink-500 !to-orange-500 hover:!bg-gradient-to-r hover:!from-pink-500 hover:!to-orange-500 cursor-pointer"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </section>
      <section className=" pb-5 px-10 md:px-2 bg-white py-5">
        <p>Category: {product.category}</p>
        <p>Stock: {product.stock}</p>
      </section>
    </div>
  );
};

export default ProductDetail;
