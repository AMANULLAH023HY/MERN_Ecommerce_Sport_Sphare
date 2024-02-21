import React from 'react';
import Header from './Header';
import Footer from './Footer';
function Layout(props){
 return(
    <>
    <Header/>
    <main style={{height:"75vh", width:"100%"}}>

        {props.children}
    </main>
    <Footer/>
    </>
 )   
}

export default Layout;