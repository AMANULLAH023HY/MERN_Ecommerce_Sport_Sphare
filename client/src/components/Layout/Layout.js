import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {Helmet} from 'react-helmet';
function Layout({children, title,description, keywords, author}){
 return(
    <>
    <Helmet>
        <meta charSet='utf-8'/>
        <meta name='description' content={description}/>
        <meta name='keywords' content={keywords}/>
        <meta name='author' content={author} />
        

        <title>{title}</title>
     
    </Helmet>
    <Header/>
    <main style={{height:"75vh", width:"100%"}}>

        {children}
    </main>
    <Footer/>
    </>
 )   
};


Layout.defaultProps ={
    title:"Sport Sphare -Shop now",
    description:"MERN Stack Project",
    keywords:"Mongodb, Express, React, Node ",
    author:"Rose"


}

export default Layout;