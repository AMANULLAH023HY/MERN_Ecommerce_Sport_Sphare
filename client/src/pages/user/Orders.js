import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/Auth";
import axios from "axios";
import moment from  'moment'
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth([]);

  const GetOrder = async()=>{
    try {
      const {data} = await axios.get(      "http://localhost:8080/api/v1/user/orders");
      setOrders(data);
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    if(auth?.token)GetOrder();
  },[auth?.token]);
  return (
    <Layout title={"Your Orders"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-3">
            <UserMenu />
          </div>
          <div className="col-9">
            <h1 className="text-center">All Orders</h1>
            {orders.map((o,i)=>{
              return(
                <div className="border shadow">
                <table className="table">
                  <thead>
                    <tr>
                      <td scope="col">#</td>
                      <td scope="col">Status</td>
                      <td scope="col">Buyer</td>
                      <td scope="col">Date</td>
                      <td scope="col">Payment</td>
                      <td scope="col">Quantity</td>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <th>{i+1} </th>
                      <th>{o?.status} </th>
                      <th>{o?.buyer?.name}</th>
                      <th>{moment(o?.createAt).fromNow()} </th>
                      <th>{o?.payment.success ? "Success" : "Failed"} </th>
                      <th>{o?.products.length} </th>

                    </tr>
                  </tbody>
                </table>

                <div className="container">
                {o?.map((p) => (
              <div key={p._id} className="row mb-2 p-3 card flex-row">
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
                  <p>Price: ₹ {p.price}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeCartItem(p._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

                </div>
                
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
