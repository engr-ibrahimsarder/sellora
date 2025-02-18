import { useEffect } from "react";
import { useState } from "react";

const useProduct = (productId) => {
  const [product, setProduct] = useState({});
  console.log(productId);

  useEffect(() => {
    const url = `http://localhost:5000/products/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);
  return [product, setProduct];
};

export default useProduct;
