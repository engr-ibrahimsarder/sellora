import { useNavigate } from "react-router-dom";
import usePublic from "../hooks/usePublic";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
const SocialLogin = () => {
  const navigate = useNavigate();
  const axiosPublic = usePublic();
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn().then((res) => {
      const userInfo = {
        email: res?.user?.email,
        name: res?.user?.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res);
        if (res.data.insertedId !== null) {
          navigate("/");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "User Already Exist!",
          });
        }
      });
    });
  };
  return (
    <div className="mt-1">
      <button
        onClick={handleGoogleSignIn}
        className="cursor-pointer flex justify-center items-center gap-3"
      >
        <FcGoogle /> <p>Google</p>
      </button>
    </div>
  );
};

export default SocialLogin;
