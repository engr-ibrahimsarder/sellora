import { useQuery } from "@tanstack/react-query";
import usePublic from "./usePublic";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = usePublic();
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/carts?email=${user?.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
