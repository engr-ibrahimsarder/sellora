import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const PaymentSuccess = () => {
  const { tranId } = useParams();
  if (tranId) {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: `Order TranjectionId: ${tranId} and order Successful!`,
      showConfirmButton: false,
      timer: 3500,
    });
  }
  return (
    <div>
      <h1 className="pt-36">Payment Success: {tranId}</h1>
    </div>
  );
};

export default PaymentSuccess;
