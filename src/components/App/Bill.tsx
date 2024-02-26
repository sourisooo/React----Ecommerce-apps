import { useContext, useState } from "react";
import { UserContext } from "./ContextProvider";
import { useNavigate  } from 'react-router-dom';

function Bill(){

    const navigate = useNavigate();

    const {orders, setorders} = useContext(UserContext);

    const {username, setusername} = useContext(UserContext);

    const {fname, setfname} = useContext(UserContext);

    const {lname, setlname} = useContext(UserContext);

    const {email, setemail} = useContext(UserContext);

    const {adress, setadress} = useContext(UserContext);

    const usermail = JSON.parse(localStorage.getItem("user"));

    const orderproperties = Object.keys(orders);

    // console.log(user);

    const redirectmain = () => {

        navigate('/main');

    };

   


    return(

        <div style={{marginLeft:'35vw', marginTop:'10vh'}}>

        <h1>Thanks you for your support</h1>

        <div >

            <p>Here is your Billing recap</p>

            <p>Username: {username}</p>

            {!usermail?.name && (<p>Email: {email}</p>)}

            {usermail?.name && (<p>Email: {usermail.name}</p>)}

            <p>Firstname: {fname}</p>

            <p>Lastname: {lname}</p>

            <p>Number of Orders: {orders.length}</p>

            <p>Total Price:   {orders.reduce((acc, order) => acc + order.product.price * order.quantity, 0) - 5} Euros</p>

            <p>Delivery Address: {adress}</p>



        </div>


        <ul>
            {orders.map((order, index) => (

                <li key={index}> {JSON.stringify(order.id)}</li>
              
            ))}

        </ul>

        <button onClick={redirectmain} style={{marginLeft:'10vw'}} >Return to main page</button>   

        </div>

    )


}

export default Bill;