import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ProductDetail from "../Pages/Home/Home/ProductDetail";
import Categories from "../Pages/Home/Categories/Categories/Categories";
import OurShop from "../Pages/Home/OurShop/OurShop";
import Cart from "../Pages/Home/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import CheckOut from "../Pages/Home/CheckOut/CheckOut";
import PaymentSuccess from "../Pages/Home/PaymentSuccess/PaymentSuccess";
import PaymentFail from "../Pages/Home/PaymentFail/PaymentFail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "ourShop",
        element: <OurShop></OurShop>,
      },
      {
        path: "/category/:productId",
        element: <ProductDetail></ProductDetail>,
      },
      {
        path: "/product/:id",
        element: <Categories></Categories>,
      },
      {
        path: "cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
      {
        path: "checkout",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
      },
      {
        path: "payment/success/:tranId",
        element: (
          <PrivateRoute>
            <PaymentSuccess></PaymentSuccess>
          </PrivateRoute>
        ),
      },
      {
        path: "payment/fail/:tranId",
        element: (
          <PrivateRoute>
            <PaymentFail></PaymentFail>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
