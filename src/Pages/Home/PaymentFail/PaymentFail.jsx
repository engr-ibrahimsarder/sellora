import { useParams } from "react-router-dom";

const PaymentFail = () => {
  const { tranId } = useParams();
  return (
    <div>
      <h1 className="pt-36">Paymet Fail: {tranId}</h1>
    </div>
  );
};

export default PaymentFail;
