import { Table } from "flowbite-react";
// import useOrderProducts from "../../../hooks/useOrderProducts";
import usePublic from "../../../hooks/usePublic";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
const Orders = () => {
  const { user } = useContext(AuthContext);
  const [order, setOrder] = useState();
  //   const [order] = useOrderProducts();
  const axiosPublic = usePublic();
  axiosPublic.get(`/orders/${user?.email}`).then((res) => {
    console.log(res);
    setOrder(res.data);
  });

  return (
    <div>
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
                {order?.map((item, index) => (
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

export default Orders;
