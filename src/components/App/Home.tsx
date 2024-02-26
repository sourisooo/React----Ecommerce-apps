import { useContext, useState } from "react";
import { useNavigate  } from 'react-router-dom';
import Product from "./Product";
import products from "./products";
import Basket from "./Basket";
import { UserContext } from "./ContextProvider";
import './Home.scss';


function Home(){

    const {orders, setorders} = useContext(UserContext);

    const usermail = JSON.parse(localStorage.getItem("user"));

    const {email, setemail} = useContext(UserContext);

    const navigate = useNavigate();

    const redirecthome = () => {

        navigate('/main');
 
     };
 
 
     const redirectmain = () => {
 

      navigate('/');
 
     };
 
 
     const redirectbasket = () => {
 
       navigate('/basket');
 
     };
 
     const redirectbill = () => {
 
      if((orders.length>0)&&(usermail||email)){     navigate('/bill');} else {alert('Please check your basket or your email')}
 
 
     };

     const signout = () => {

        localStorage.removeItem("user");

        navigate('/main');

     }
     
     const redirectprofile = () => {

        navigate('/profil');
  
      };


    return(

        <div className="maincontainer">

    <div className="headercontainer">

        


<div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{width: "280px"}}>
<a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
      <span className="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto" >
      <li className="nav-item" onClick={redirecthome}>
        <a href="#" className="nav-link active" aria-current="page">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#home" /></svg>
          Home
        </a>
      </li>
      <li onClick={redirectbasket}>
        <a href="#" className="nav-link text-white">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"/></svg>
          Your basket
        </a>
      </li>
      <li onClick={redirectbill}>
        <a href="#" className="nav-link text-white">
          <svg className="bi pe-none me-2" width="16" height="16" ><use xlink:href="#table"/></svg>
          Your orders
        </a>
      </li>
      <li onClick={redirectmain}>
        <a href="#" className="nav-link text-white">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlink:href="#grid"/></svg>
          Products
        </a>
      </li>
    </ul>
    <hr></hr>

    {usermail?.name && (
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="logo192.png" alt="" width="52" height="52" className="rounded-circle me-2"/>


        <strong>{usermail.name }</strong>

      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><a className="dropdown-item" href="#" onClick={redirectprofile}>Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <li><a className="dropdown-item" href="#" onClick={signout}>Sign out</a></li>
      </ul>
    </div>
    )}

  </div>

  </div>






        {/* <Basket/> */}



        <div className='productsContainer'>


     
        {products.map(product => (

        <Product product={product}/>

        ))}

        </div>

        </div>

    )

}


export default Home;