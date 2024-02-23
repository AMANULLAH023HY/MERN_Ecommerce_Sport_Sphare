import { useState } from "react";
import Layout from "../../components/Layout/Layout";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const ForgotPassword = ()=>{
    const [email, setEmail] = useState("");
    const [answer, setAnswer] = useState("");
    const [newPassword, setNewPassword] = useState("");
  
  
    const navigate = useNavigate();
    
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const res = await axios.post("http://localhost:8080/api/v1/user/forgot-password", {
          email,
          answer,
          newPassword,
        });
  
        if (res.data.success) {
          toast.success("Login successfully!");
          
          navigate("/login");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    };

    return(
        <Layout title={"Forgot Password " }>


<div className="register">
          <form onSubmit={handleSubmit}>
<h1>Reset Password</h1>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="answer"
                placeholder="What is your birth place"
                required
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Reset
            </button>
            {/* <div className="mb-3 mt-3">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  navigate("/forgot-password");
                }}
              >
                Forgot Password
              </button>
            </div> */}
          </form>
        </div>

        </Layout>
    )
}


export default ForgotPassword;