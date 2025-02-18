import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
    };
    console.log(userInfo);
    signIn(data.email, data.password).then((res) => {
      console.log(res);
      navigate("/");
    });
    reset();
  };
  return (
    <div>
      <div className="container mx-auto h-screen">
        <Link to="/">
          <img className="h-14" src={logo} alt="navlogo" />
        </Link>
        <div className="flex  h-[200] w-[400px] mx-auto bg-gray-200 rounded justify-center gap-40 py-5">
          <div>
            <h1 className="text-center text-xl mt-10 font-bold">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="" className="text-xl">
                  Email
                </label>
                <br />
                <input
                  className="mb-5 focus:outline-none px-2 py-2 w-96 bg-white rounded"
                  placeholder="Email"
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
                  placeholder="password"
                  {...register("password")}
                />
              </div>

              <Link className="flex justify-end mt-2">
                <h1 className="text-gray-500">Forget Password</h1>
              </Link>
              <input
                className="btn py-2 rounded cursor-pointer mt-5 bg-orange-400 hover:bg-orange-400 text-white w-96"
                type="submit"
                value="SignIn"
              />
            </form>
            <p className="mt-5">
              New Here?{" "}
              <Link className="text-orange-400" to="/signup">
                Create a New Account
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

export default Login;
