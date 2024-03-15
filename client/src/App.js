import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Policy from "./pages/Policy";
import Contact from "./pages/Contact";
import PagenotFound from "./pages/PagenotFound";
import Register from "./pages/Auth/Register";

import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import Private from "./components/Routes/Private";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminRoute from "./components/Routes/AdminRoute";
import CreateCategory from "./pages/admin/CreateCategory";
import CreateProduct from "./pages/admin/CreateProduct";
import Users from "./pages/admin/Users";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
import Products from "./pages/admin/Products";
import UpdateProduct from "./pages/admin/UpdateProduct";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Private />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory/>} />
          <Route path="admin/create-product" element={<CreateProduct/>} />
          <Route path="admin/product/:slug" element={<UpdateProduct/>} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<Users />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<PagenotFound />} />
        {/* <Route path='' element={<HomePage />}/> */}
      </Routes>
    </>
  );
}

export default App;
