/* eslint-disable react/no-unknown-property */
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Table } from "flowbite-react";
import useCart from "../../../hooks/useCart";
import usePublic from "../../../hooks/usePublic";
const ManageAccount = () => {
  const [dbUser, setUser] = useState();

  const [cart] = useCart();
  const { user } = useContext(AuthContext);
  const axiosPublic = usePublic();
  axiosPublic.get(`/users/${user?.email}`).then((res) => {
    setUser(res.data);
  });
  return (
    <div className="">
      <h1 className="text-xl">Manage My Account</h1>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        <div className="col-span-1 bg-white p-5">
          <h1>Personal Profile</h1>
          <h3 className="text-gray-600">{user?.displayName}</h3>
          <p className="text-gray-600">{user?.email}</p>
        </div>
        <div className="col-span-2 bg-white flex p-5">
          <div>
            <h1>Address Book</h1>
            <p className="uppercase text-gray-600">Default Shipping Address</p>
            <h3>{user?.displayName}</h3>
            <p>{dbUser?.address}</p>
          </div>
          <div>
            <h1 className="uppercase text-gray-600">Default Billing Address</h1>
            <h3>{user?.displayName}</h3>
            <p>{dbUser?.address}</p>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="bg-white">
          <h1 className="pl-5 py-3">Recent Order</h1>
          <div className="overflow-x-auto">
            <Table>
              <Table.Head>
                <Table.HeadCell>#SL</Table.HeadCell>
                <Table.HeadCell>Image</Table.HeadCell>
                <Table.HeadCell>Product name</Table.HeadCell>
                <Table.HeadCell>Price</Table.HeadCell>
                <Table.HeadCell>Order</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {cart?.map((item, index) => (
                  <Table.Row
                    key={item._id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {index + 1}
                    </Table.Cell>
                    <Table.Cell>
                      <img className="h-14" src={item.img}></img>
                    </Table.Cell>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.price}</Table.Cell>
                    <Table.Cell>{item._id}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageAccount;
