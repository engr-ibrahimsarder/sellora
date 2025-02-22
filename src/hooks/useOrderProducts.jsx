import { useQuery } from "@tanstack/react-query";
import usePublic from "./usePublic";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useOrderProducts = () => {
  const { user } = useContext(AuthContext);
  const axiosPublic = usePublic();
  const { data: order = [], refetch } = useQuery({
    queryKey: ["order", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/orders?email=${user?.email}`);
      return res.data;
    },
  });
  console.log(order);
  return [order, refetch];
};

export default useOrderProducts;
