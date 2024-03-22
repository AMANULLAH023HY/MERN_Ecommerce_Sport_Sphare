import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/Auth";
import { useCart } from "../context/Cart";

const CartPage = () => {
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  const naviagte = useNavigate();
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center bg-light p-2 mb-1">
              {`Hello ${auth?.token && auth?.user?.name}`}
            </h1>
            <h4 className="text-center">
              {cart?.length > 1
                ? `You Have ${cart.length} items in your cart ${
                    auth?.token ? " " : "Please login to checkout"
                  } `
                : "Your cart is empty"}
            </h4>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
