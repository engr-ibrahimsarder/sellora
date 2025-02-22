import axios from "axios";

const axiosPublic = axios.create({
  // https://sellora-server.vercel.app/
  // http://localhost:5000/
  baseURL: "https://sellora-server.vercel.app/",
});
const usePublic = () => {
  return axiosPublic;
};

export default usePublic;
