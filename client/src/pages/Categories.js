import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import Layout from "../components/Layout/Layout";
import useCategory from "../components/hooks/useCategory";

const Categories = () => {
    const categories = useCategory();
  
    return (
      <Layout title={"All Categories"}>
        <div className="container">
          <div className="row">
            {categories && categories.map((c) => (
              <div className="col-md-6" key={c._id}>
                <button>
                  <Link to={"/"}>{c.name}</Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    );
  };
  

export default Categories;
