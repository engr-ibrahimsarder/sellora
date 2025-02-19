import useProducts from "../../../hooks/useProducts";
import ProductsCard from "../Home/ProductsCard";

const OurShop = () => {
  const [products] = useProducts();
  return (
    <div className="container mx-auto">
      <h1 className=" text-xl ">Just For You</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-10 px-10 md:px-0 mt-24">
        {products?.map((product) => (
          <ProductsCard key={product._id} product={product}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default OurShop;
