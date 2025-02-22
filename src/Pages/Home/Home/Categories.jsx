import { useNavigate } from "react-router-dom";
import img1 from "../../../assets/categories/1.jpg";
import img2 from "../../../assets/categories/2.jpg";
import img3 from "../../../assets/categories/3.jpg";
import img4 from "../../../assets/categories/4.jpg";
import img5 from "../../../assets/categories/5.jpg";
import img6 from "../../../assets/categories/6.jpg";
import img7 from "../../../assets/categories/7.jpg";
import img8 from "../../../assets/categories/8.jpg";
const Categories = () => {
  const navigate = useNavigate();
  const handleCategory = (id) => {
    navigate(`/product/${id}`);
    console.log(id);
  };
  return (
    <div className="container mx-auto">
      <h1 className="mt-6 text-xl my-2">Categories</h1>
      <section className="grid grid-cols-4 lg:grid-cols-8 px-10 md:px-0 gap-1">
        <button
          onClick={() => handleCategory("Men's Sneaker")}
          className="cursor-pointer"
        >
          <img className="h-36" src={img1} alt="" />
          <h1 className="text-black">Jacket</h1>
        </button>
        <button
          onClick={() => handleCategory("Bag")}
          className="cursor-pointer"
        >
          <img className="h-36" src={img2} alt="" />
          <h1 className="text-black">Bag</h1>
        </button>
        <button
          onClick={() => handleCategory("Men's Sneaker")}
          className="cursor-pointer"
        >
          <img className="h-36" src={img3} alt="" />
          <h1 className="text-black">Shoes</h1>
        </button>
        <button
          onClick={() => handleCategory("Men's Sneaker")}
          className="cursor-pointer"
        >
          <img className="h-36" src={img4} alt="" />
          <h1 className="text-black">Watch</h1>
        </button>
        <button
          onClick={() => handleCategory("Cap")}
          className="cursor-pointer"
        >
          <img className="h-36" src={img5} alt="" />
          <h1 className="text-black">Cap</h1>
        </button>
        <button
          onClick={() => handleCategory("Men's Sneaker")}
          className="cursor-pointer"
        >
          <img className="h-36" src={img6} alt="" />
          <h1 className="text-black">Shirt</h1>
        </button>
        <button
          onClick={() => handleCategory("Men's Sneaker")}
          className="cursor-pointer"
        >
          <img className="h-36" src={img7} alt="" />
          <h1 className="text-black">T-Shirt</h1>
        </button>
        <button
          onClick={() => handleCategory("Bag")}
          className="cursor-pointer"
        >
          <img className="h-36" src={img8} alt="" />
          <h1 className="text-black">Bag</h1>
        </button>
      </section>
    </div>
  );
};

export default Categories;
