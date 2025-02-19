/* eslint-disable no-undef */
import { useParams } from "react-router-dom";
import useProducts from "../../../../hooks/useProducts";
import ProductsCard from "../../Home/ProductsCard";

const Categories = () => {
  const { id } = useParams();
  const [products] = useProducts();
  const data = products.filter((product) => product?.category?.includes(id));

  return (
    <div className="container mx-auto">
      <h1 className=" text-xl ">Just For You</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-10 px-10 md:px-0 mt-24">
        {data?.map((product) => (
          <ProductsCard key={product._id} product={product}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
