import Layout from "../components/Layout/Layout"
import ContactUs from '../images/contactus1.jpg'
import {BiMailSend,  BiPhoneCall, BiSupport} from 'react-icons/bi'

const Contact = ()=>{
    return (
        <Layout title={'Contact Us'}>
        <div className="row contactus">
            <div className="col-md-6">
                <img 
                    src={ContactUs}
                    alt="contactus"
                    style={{width:"100%"}}
                />
            </div>
            <div className="col-md-4">

                <h1 className="bg-dark p-2 text-white text-center"> CONTACT US</h1>
                <p className="text-justify mt-2">
                    any query and info about product fell free to call any time we 24X7 available

                </p>

                <p className="mt-3">
                    <BiMailSend/> : www.rose@sportsphare.com
                </p>

                <p className="mt-3">
                    <BiPhoneCall/> : 9608791598
                </p>

                <p className="mt-3">
                    <BiSupport/> : 18000-00-000 (toll free)
                </p>
            </div>

        </div>
        </Layout>
    )
}

export default Contact;