import { useContext, useEffect, useState } from "react";
import './Modal.scss';
import products from "./products";
import { UserContext } from "./ContextProvider";
import { json } from "react-router-dom";



function Modal({modal, setmodal, itemshow}){

        const [rating, setrating] = useState([false,false,false]);

        const [ratinglevel, setratinglevel] = useState('');

        const {orders, setorders} = useContext(UserContext);

        const [comment, setcomment] = useState('');

        const [commentlist, setcommentlist] = useState<any>([]);

        let user = JSON.parse(localStorage.getItem("user"));

        let commentslist = JSON.parse(localStorage.getItem("list"));

        let newcommentlist = [];

        // console.log(itemshow.id);

        let itemclone = itemshow.cloneNode(true);

        const findById = products.find(product => product.id == itemshow.id);

          
          // console.log(findById);

      const closemodal = () => {

        setmodal(false);
        const overlay = document.querySelector(".overlay"); // Create an overlay element
        document.querySelector('main')?.removeChild(overlay); // Add the overlay to the body

        
        // localStorage.removeItem("list");

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


      const addcomment = () => {

       
      
        let random = Math.random()*1000;
        let time = new Date();

        let newcomment = {

          id: 'COM'+random,
          product: itemshow.id,
          user: user,
          comment: comment,
          time: time,
          rating: ratinglevel,
          
        };


        console.log(commentslist);

        if (commentslist !=null) {
          
          
          newcommentlist = [newcomment, ...commentslist];

          let filterlist = newcommentlist.filter(comment => comment.product == itemshow.id).filter(comme => comme.comment != '');
          
    
          setcommentlist([...filterlist]); 

          localStorage.setItem("list", JSON.stringify(newcommentlist));

          setcomment('');

        
          
        } 
        
        
        else {
          
          newcommentlist = [newcomment];

          let filterlist =  newcommentlist.filter(comment => comment.product == itemshow.id).filter(comme => comme.comment != '');
          
      
          setcommentlist([...filterlist]);

  
          localStorage.setItem("list", JSON.stringify(newcommentlist));

          setcomment('');


        
        console.log(newcommentlist);


        console.log(commentlist);
      }
    
           
      }


      const handlerating = (event) => {

        console.log(event.target.id);

        setratinglevel(event.target.id);

        setrating(event.target.checked); // Update state based on checkbox change
      };


      const filterrating = (event) => {

        if(commentslist){

    
        console.log(commentslist);

        let filterlist =  commentslist.filter(comme => comme.product == itemshow.id).filter( c => c.rating == event.target.id);

        setcommentlist([...filterlist]);

        console.log(filterlist);

      }

      };


      useEffect(() => {

        const overlaycontent = document.querySelector('.addme');
        overlaycontent?.appendChild(itemclone);
        filterrating(event);
        addcomment();

      },[modal])


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
            
            <div className="modaldescription">   <h2 style={{marginTop:'2vh'}}>Comments</h2>     <button type='button' style={{marginBottom:'2vh', width:'7vw', height:'5vh'}} onClick={addtobasket}>Add to basket</button> 
            
          
            <div className="filters">
          <span className="filter" id="threestar">
            <a style={{marginRight:'2em'}}>Your rating</a>
            <input type="checkbox" name="rating" value="3" id="rating-3" checked ={rating[2]} onChange={handlerating}/>
            <label htmlFor="rating-3" id="rating-3">3 étoiles</label>
          </span>
          <span className="filter" id="twostar">
            <input type="checkbox" name="rating" value="2" id="rating-2" checked ={rating[1]} onChange={handlerating}/>
            <label htmlFor="rating-2" id="rating-2">2 étoiles</label>
          </span>
          <span className="filter" id="onestar">
            <input type="checkbox" name="rating" value="1" id="rating-1" checked ={rating[0]} onChange={handlerating}/>
            <label htmlFor="rating-1" id="rating-1">1 étoile</label>
          </span>
        </div>




            <input type='text' style={{width:'30vw', height:'10vh', marginBottom:'2vh'}} onChange={e => setcomment(e.target.value)} value={comment} placeholder="Write your comment here..."/>

            {comment ? (<button type='button' style={{width:'7vw', height:'5vh'}} onClick={addcomment}>Add a comment</button>):""}

           

            <div className="filters">
          <span className="filter" id="threestar">
          <a style={{marginRight:'2em'}}>Filter result by rating</a>
            <input type="checkbox" name="rating" value="3" id="rating-3" checked ={rating[2]} onChange={filterrating}/>
            <label  id="rating-3">3 étoiles</label>
          </span>
          <span className="filter" id="twostar">
            <input type="checkbox" name="rating" value="2" id="rating-2" checked ={rating[1]} onChange={filterrating}/>
            <label id="rating-2">2 étoiles</label>
          </span>
          <span className="filter" id="onestar">
            <input type="checkbox" name="rating" value="1" id="rating-1" checked ={rating[0]} onChange={filterrating}/>
            <label  id="rating-1">1 étoile</label>
          </span>
        </div>

    
            <div className="commentscontainer">


            {commentlist?.map(comment => (

                <>
        <article className="review" data-rating="2">
          <h3 className="review__title" style={{fontSize:'1em'}}>{comment.user?.name||"anonymous"} at {JSON.stringify(comment.time)}</h3>
          <div className="review__stars">
            <i className="icon-star"></i>
            <i className="icon-star"></i>
          </div>
          <p>{comment.comment} {comment.rating}</p>
        </article>

                </>

            )
                      
            )}

            </div>
            
            </div>

            </div>

          </div>
        </div>
      </div>
      


    )



}


export default Modal;