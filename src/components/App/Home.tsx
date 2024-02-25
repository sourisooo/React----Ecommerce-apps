import { useContext, useState } from "react";
import { useNavigate  } from 'react-router-dom';
import Product from "./Product";
import products from "./products";
import Basket from "./Basket";
import { UserContext } from "./ContextProvider";
import './Home.scss';


function Home(){

    const {orders, setorders} = useContext(UserContext);

    const navigate = useNavigate();

    const redirectBasket = () => {


            navigate('/basket');

    };

    const redirectBeauty = () => {


        navigate('/main');


    };




    return(

        <>

        <h1 style={{ marginBottom: '0vh' }} onClick={redirectBeauty}> HomePage </h1> 

        <button style={{marginLeft: '80vw', fontSize:'1.5em', marginBottom: '6vh' }} type='button' onClick={redirectBasket}>Your Basket    <span className="badge bg-primary rounded-pill">{orders.length}</span></button>


        {/* <Basket/> */}



        <div className='productsContainer'>


     
        {products.map(product => (

        <Product product={product}/>

        ))}

        </div>

        </>

    )

}


export default Home;