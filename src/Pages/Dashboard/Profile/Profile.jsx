import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider";
import usePublic from "../../../hooks/usePublic";
import Swal from "sweetalert2";

const Profile = () => {
  const axiosPublic = usePublic();
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axiosPublic.patch(`users/${user?.email}`, data).then((res) => {
      reset();
      if (res.data.acknowledged) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "User Profile Update Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      console.log(res);
    });
  };
  return (
    <div>
      <h1 className="text-xl">Profile</h1>
      <div className="bg-white p-5 mb-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col lg:flex-row gap-5">
            <div>
              <label htmlFor="">First Name</label>
              <br></br>
              <input
                type="text"
                className="rounded focus:outline-none border-2 border-blue-500 my-1  md:w-[310px]"
                placeholder="First Name"
                {...register("firstName", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="">Last Name</label>
              <br></br>
              <input
                type="text"
                className="rounded focus:outline-none border-2 border-blue-500 my-1 lg:w-[310px]"
                placeholder="Last Name"
                {...register("lastName", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="">User Name</label>
              <br></br>
              <input
                type="text"
                className="rounded focus:outline-none border-2 border-blue-500 my-1  md:w-[310px]"
                placeholder="User Name"
                {...register("userName", { required: true })}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <div>
              <label htmlFor="">Email</label>
              <br></br>
              <input
                type="text"
                className="rounded bg-gray-300 border-2 border-blue-500 my-1  md:w-[640px]"
                value={user?.email}
                disabled
              />
            </div>
            <div>
              <label htmlFor="">Phone</label>
              <br></br>
              <input
                type="text"
                className="rounded border-2 border-blue-500 my-1  md:w-[310px]"
                placeholder="Phone"
                {...register("phone", { required: true })}
              />
            </div>
          </div>
          <div>
            <label htmlFor="">Address</label>
            <br></br>
            <input
              type="text"
              className="rounded border-2 border-blue-500 my-1 md:w-[970px]"
              placeholder="#Home/#Office, #Road, #PostalCode, #District, #Division, #Country"
              {...register("address", { required: true })}
            />
          </div>
          <input
            type="submit"
            className="px-5 py-3 bg-orange-400 rounded text-white cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Profile;
