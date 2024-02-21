
import { useState } from "react";
import Layout from "../../components/Layout/Layout";


const Register = () => {
const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [phone,setPhone] = useState("")
const [address,setAddress] = useState("")

// form function  

const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(name,email,password,phone,address);

}

  return (
    <>
      <Layout title={"Register - Sport Sphere App"}>
        <div className="register">
          <h1>Register Form</h1>
          <form onSubmit={handleSubmit}>
          <div className="mb-3">
              
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your Name"
                required
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
            </div><div className="mb-3">
              
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your Email"
                required
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>

            <div className="mb-3">
              
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Enter your Phone No"
                required
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
              />
            </div>
            <div className="mb-3">
              
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Enter your Address"
                required
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Register;
