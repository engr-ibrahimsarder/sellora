import { useEffect } from "react";
import { useState } from "react";

const useProduct = (productId) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `https://sellora-server.vercel.app/products/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);
  return [product, setProduct];
};

export default useProduct;
