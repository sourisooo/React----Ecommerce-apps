import { useContext, useState } from 'react';
import './Product.scss';
import { UserContext } from './ContextProvider';
import { useNavigate  } from 'react-router-dom';


function Product({product}) {

  const navigate = useNavigate();

  const [quantity, setquantity] = useState(0);

  const {orders, setorders} = useContext(UserContext);

  // const [orders, setorders] = useState<any>([]);
 

    const Raiseqt = () => {

      setquantity(quantity + 1);


    };


    const Lowerqt = () => {

      if (quantity>0){     setquantity(quantity - 1);}

    };


    const CreateOrder = () => {


      // console.log(product, quantity);

      if (quantity>0) {

        let random = Math.random()*1000;

      let neworder = {

        id: 'ORD'+random,
        quantity: quantity,
        product: product,

      };

      console.log(neworder);

    

      setorders([...orders, neworder]);

      navigate('/basket');

      console.log(orders);

    }}



    return (

  

        <>

        <div className="product">

            <div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">

      <img src={product.image} className="    " alt="..."/> 
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

    <div className="pricing"> <a onClick={Raiseqt}>+ </a>  <a onClick={Lowerqt}>- </a> </div>

    <div className="QT">Quantity <div className='QTnum'>{quantity}</div></div>

    <div className="PRICE">TOTAL TTC <div className='PRICEnum'>{product.price} euros</div></div>

    <button type='button' className='addtobasket' onClick={CreateOrder}>Add to basket</button>

    

</div>

        </>



    )
}

export default Product;