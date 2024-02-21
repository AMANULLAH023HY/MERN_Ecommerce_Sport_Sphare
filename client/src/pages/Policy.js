import Layout from "../components/Layout/Layout"
import Privacy from '../images/policy.png'


const Policy = ()=>{
    return(
        <Layout>
           <div className="row contactus">
            <div className="col-md-6">
                <img 
                    src={Privacy}
                    alt="contactus"
                    style={{width:"100%"}}
                />
            </div>
            <div className="col-md-4">

               
                <p className="text-justify mt-2">What Information We Collect</p>
                <p className="text-justify mt-2">How We Use Your Information</p>
                <p className="text-justify mt-2">Data Security</p>
                <p className="text-justify mt-2">Third-Party Services</p>
                <p className="text-justify mt-2">Your Rights</p>
                <p className="text-justify mt-2">Policy Updates</p>

            </div>

        </div>
        </Layout>
    )
}
export default Policy;