import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";

const CreateCategory =()=>{
    return(
        <Layout title={"dashboard - Create Category"}>
        <div className="container-fluid m-3 p-3">
               <div className="row">
            <div className="col-3">
                <AdminMenu/>
            </div>
            <div className="col-9">

                <h1>Create Category</h1>
            </div>
        </div>
        </div>

        </Layout>
    )
}

export default CreateCategory;