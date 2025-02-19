import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import Rating from "../../../Components/Rating";

const ProductsCard = ({ product }) => {
  const navigate = useNavigate();
  const { name, price, img, ratings, ratingsCount, _id } = product;
  const total = product.price + 300;
  const part = 300;
  const percentage = (part / total) * 100;
  const roundedPercentage = percentage.toFixed(0);
  const navigateToProductDetail = (id) => {
    navigate(`/category/${id}`);
  };

  return (
    <div>
      <button
        onClick={() => navigateToProductDetail(_id)}
        className="cursor-pointer"
      >
        <Card className="max-w-sm h-[500px]" imgAlt={name} imgSrc={img}>
          <h1 className="text-start">{name}</h1>

          <div className="flex items-center gap-2">
            <span className="text-base font-bold  text-orange-500">
              ${price}
            </span>
            <span className="text-base font-sm">-{roundedPercentage}%</span>
          </div>
          <div className="flex justify-start text-gray-400 items-center gap-3">
            <Rating totalStars={ratings}></Rating>
            <h3>({ratingsCount})</h3>
          </div>
        </Card>
      </button>
    </div>
  );
};

export default ProductsCard;
