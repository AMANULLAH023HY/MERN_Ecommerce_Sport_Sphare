import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/Auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const Profile = () => {
  // constext
  const [auth, setAuth] = useAuth();
  // state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  // get user data
  useEffect(() => {
    const { email, name, phone, address } = auth?.user;
    setName(name);
    setEmail(email);
    setPhone(phone);
    setAddress(address);
  }, [auth?.user]);

  // form function

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const {data} = await axios.put(
        "http://localhost:8080/api/v1/user/profile",
        {
          name,
          email,
          password,
          phone,
          address,
        }
      );
      if(data?.error){
        toast.error(data?.error);
      }else{
        setAuth({...auth, user:data?.updateUser});
        let ls = localStorage.getItem('auth');
        ls = JSON.parse(ls);
        ls.user = data.updateUser;
        localStorage.setItem('auth', JSON.stringify(ls));
        toast.success("Profile Updated successfully!");
      }

    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"User Profile"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-3">
            <UserMenu />
          </div>
          <div className="col-9">
            <div className="register">
              <form onSubmit={handleSubmit}>
                <h1>USER PROFILE</h1>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your Name"
                   
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your Email"
             
                    disabled
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
      
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Enter your Phone No"
                 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Enter your Address"
                    
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  UPDATE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
