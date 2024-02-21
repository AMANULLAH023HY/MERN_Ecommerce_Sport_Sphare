import Layout from "../components/Layout/Layout";
import ContactUs from '../images/about2.jpg'

export default function AboutPage(){
    return (

        <Layout title={'About Us -Sport spahe'}>
            
        <div className="row contactus">
            <div className="col-md-6">
                <img 
                    src={ContactUs}
                    alt="contactus"
                    style={{width:"100%"}}
                />
            </div>
            <div className="col-md-4">

               
                <p className="text-justify mt-2">
                Welcome to Sport Spare! We're here to help you gear up for your favorite sports. Our online store offers a wide range of equipment and accessories to suit your needs. Whether you're playing soccer, basketball, or hitting the gym, we've got you covered. Shop now and get ready to elevate your game with Sport Spare!

                </p>

            </div>

        </div>
        </Layout>
        
    )
}