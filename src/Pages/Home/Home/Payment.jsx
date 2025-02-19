import payment from "../../../assets/app/payment.png";
const Payment = () => {
  return (
    <div className="bg-white py-5">
      <div className="container mx-auto ">
        <h1 className="my-3">Payment Method</h1>
        <p>
          <img src={payment} alt="" />
        </p>
      </div>
    </div>
  );
};

export default Payment;
