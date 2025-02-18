import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
    };
    console.log(userInfo);
    createUser(data.email, data.password).then((res) => {
      console.log(res);
      navigate("/");
    });
    reset();
  };
  return (
    <div>
      <div className="container mx-auto">
        <Link to="/">
          <img className="h-14" src={logo} alt="navlogo" />
        </Link>
        <div className="flex  h-[200] w-[400px] mx-auto bg-gray-200 rounded justify-center  py-5 px-3">
          <div>
            <h1 className="text-center text-xl mt-10 font-bold">SignUp</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="" className="text-xl">
                  Name
                </label>
                <br />
                <input
                  className="mb-5 focus:outline-none px-2 py-2 w-96 bg-white rounded"
                  placeholder="Enter Your Full Name"
                  {...register("name")}
                />
              </div>
              <div>
                <label htmlFor="" className="text-xl">
                  Email
                </label>
                <br />
                <input
                  className="mb-5 focus:outline-none px-2 py-2 w-96 bg-white rounded"
                  placeholder="Enter Your Email"
                  {...register("email")}
                />
              </div>
              <div>
                <label htmlFor="" className="text-xl">
                  Password
                </label>
                <br />
                <input
                  className="focus:outline-none px-2 py-2 w-96 bg-white rounded"
                  placeholder="Enter YOur Password"
                  {...register("password")}
                />
              </div>
              <p>
                By creating and/or using your account, you agree to our{" "}
                <Link to="" className="text-blue-500">
                  Terms of Use
                </Link>{" "}
                and{" "}
                <Link to="" className="text-blue-500">
                  Privacy Policy.
                </Link>
              </p>

              <input
                className="btn py-2 rounded cursor-pointer mt-5 bg-orange-400 hover:bg-orange-400 text-white w-96"
                type="submit"
                value="SignIn"
              />
            </form>
            <p className="mt-5">
              Already Have An Account?{" "}
              <Link className="text-orange-400" to="/login">
                Login
              </Link>
            </p>
            <p className="text-center mt-5 text-xl">or signin with</p>
            <div className="flex gap-5 mt-5 justify-center">
              <button className="cursor-pointer flex justify-center items-center gap-3">
                <FcGoogle /> <p>Google</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
