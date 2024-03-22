import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/Auth";
import { useCart } from "../context/Cart";

const CartPage = () => {
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  const naviagte = useNavigate();

//   dlete item 
const removeCartItem = (pid)=>{
    try {
        let myCart = [...cart];
        let index = myCart.findIndex(item=>item._id === pid);
        myCart.splice(index,1);
        setCart(myCart)
        
    } catch (error) {
        console.log(error)
    }

}
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
        <div className="row">
          <div className="col-md-8">
            {cart?.map((p) => (
              <div className="row mb-2 p-3 card flex-row">
                <div className="col-md-4">
                  <img
                    src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                    width={"100px"}
                    height={"100px"}
                  />
                </div>
                <div className="col-md-8">
                  <p>{p.name}</p>
                  <p>{p.description.substring(0, 30)} </p>
                  <p>Price: {p.price}</p>
                  <button className="btn btn-danger" onClick={()=>removeCartItem(p._id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4">Checkout | Payment</div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
