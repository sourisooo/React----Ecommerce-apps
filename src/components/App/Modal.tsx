import { useContext, useEffect, useState } from "react";
import './Modal.scss';
import products from "./products";
import { UserContext } from "./ContextProvider";



function Modal({modal, setmodal, itemshow}){

        const {orders, setorders} = useContext(UserContext);

        console.log(itemshow.id);

        let itemclone = itemshow.cloneNode(true);

        const findById = products.find(product => product.id == itemshow.id);
          
          console.log(findById);

      const closemodal = () => {

        setmodal(false);
        const overlay = document.querySelector(".overlay"); // Create an overlay element
        document.querySelector('main')?.removeChild(overlay); // Add the overlay to the body

      }


      const addtobasket = () => {

        let random = Math.random()*1000;


        let neworder = {

            id: 'ORD'+random,
            quantity: 1,
            product: findById,
    
          };
    
          console.log(neworder);
    
        
    
          setorders([...orders, neworder]);
    
          closemodal();


      }


      useEffect(() => {

        const overlaycontent = document.querySelector('.addme');
        overlaycontent?.appendChild(itemclone);

      },[])


    return(

        <div tabindex="-1" role="dialog" id="modalSheet" >
        <div className="modal-dialog" role="document">
          <div className="modal-content rounded-4 shadow">
            <div className="modal-header border-bottom-0">
              <h1 className="modal-title fs-5"></h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closemodal}></button>
            </div>

            <div className="modalcontainer">

            <div className="addme">
            </div>
            
            <div className="modaldescription">   <h2 style={{marginTop:'20vh'}}>Description</h2> {findById?.modaldescription}        <button type='button' style={{marginBottom:'10vh', width:'15vw', height:'10vh'}} onClick={addtobasket}>Add to basket</button></div>

     
   
            </div>

          </div>
        </div>
      </div>
      


    )



}


export default Modal;