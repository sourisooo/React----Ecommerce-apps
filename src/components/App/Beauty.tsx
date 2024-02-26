
import { useNavigate  } from 'react-router-dom';
import './Beauty.scss';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from './ContextProvider';
import products from './products';
import Modal from './Modal';


function Beauty(){

    const {orders, setorders} = useContext(UserContext);

    const navigate = useNavigate();

    const [search, setsearch] = useState('');

    const [renderprod, setrenderdeprod] = useState<any>(products);

    const [modal, setmodal] = useState(false);

    const [itemshow, setitemshow] = useState('');

    const usermail = JSON.parse(localStorage.getItem("user"));

    const {email, setemail} = useContext(UserContext);


    const redirecthome = () => {

      navigate('/');

    };


    const redirectmain = () => {

      navigate('/main');

    };


    const redirectbasket = () => {

      navigate('/basket');

    };

    const redirectbill = () => {

      if((orders.length>0)&&(usermail||email)){     navigate('/bill');} else {alert('Please check your basket or your email')}


    };


    const redirectsignin = () => {

      navigate('/signin');

    };

    const redirectprofil = () => {

      navigate('/profil');

    };


    const change = (e) => {

      e.preventDefault();

      setsearch(e.target.value);

      setrenderdeprod(products.filter(product => {

        return product.title == e.target.value;

        // console.log(product.title, search, product.title == search);

      }));

    console.log(search);

    console.log(products)



    }


    const displayproduct = (e) => {

      console.log('click', e.target.parentElement);

      setitemshow(e.target.parentElement);
    
      setmodal(true);

      console.log( document.querySelector('main'));

      const overlay = document.createElement("div"); // Create an overlay element
      overlay.classList.add("overlay"); // Add the styling class

      document.querySelector('main').appendChild(overlay); // Add the overlay to the body


    }

    const logout = () => {

      localStorage.removeItem("user");

      window.location.reload();

    };
   

    useEffect(() => {
      displayproduct
    }, [modal])


    return(

        <>

        <nav className="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
  <div className="container">
    <a className="navbar-brand d-md-none" href="#">
      <svg className="bi" width="24" height="24"></svg>
      Aperture
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" id="offcanvas" aria-labelledby="offcanvasLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasLabel">Aperture</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav flex-grow-1 justify-content-between">
          <li className="nav-item"><a className="nav-link" href="#">
            <svg className="bi" width="24" height="24"></svg>
          </a></li>
          <li className="nav-item"><a className="nav-link" href="#" onClick={redirecthome}>Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#" onClick={redirectmain}>Products</a></li>
          <li className="nav-item"><a className="nav-link" href="#" onClick={redirectbasket} >Your basket   <span className="badge bg-primary rounded-pill">{orders.length}</span></a></li>
          <li className="nav-item"><a className="nav-link" href="#" onClick={redirectbill}>Your Orders</a></li>

          {!usermail?.name &&(
            <>
          <li className="nav-item"><a className="nav-link" href="#" onClick={redirectsignin}>Signin</a></li>

          </>
          )}

        {usermail?.name &&(
            <>
          <li className="nav-item"><a className="nav-link" href="#" onClick={redirectprofil}>Welcome {usermail.name}</a></li>
          <li className="nav-item"><a className="nav-link" href="#" onClick={logout}>Logout</a></li>
          </>
          )}


          <li className="nav-item"><a className="nav-link" href="#">
            <svg className="bi" width="24" height="24"></svg>
          </a></li>
        </ul>
      </div>
    </div>
  </div>
</nav>

      


<main>
  <div className="text-center bg-body-tertiary" style={{marginTop:'-3vh'}}>
    <div className="col-md-6 p-lg-5 mx-auto my-5">
      <h1 className="display-3 fw-bold" onClick={redirecthome}>Welcome to console sales!</h1>
      <h3 className="fw-normal text-muted mb-3" onClick={redirecthome}>Buy anything you want</h3>
      <div className="d-flex gap-3 justify-content-center lead fw-normal">
        <a className="icon-link" href="#" onClick={redirecthome}>
          Learn more
          <svg className="bi"></svg>
        </a>
        <a className="icon-link" href="#" onClick={redirecthome}>
          Buy
          <svg className="bi"></svg>



        </a>
      </div>

      <input type="text" style={{ marginTop: '2vw', width:'20vw', height:'5vh'}} value={search} onChange={change} placeholder='try "playstation 3"'/>


    </div>


    <div className="row align-items-md-stretch" style={{marginTop:'-10vh'}}>


{renderprod.map(product => (


<div className="col-md-4" onClick={displayproduct}>
<div className="h-100 p-5 bg-body-tertiary border rounded-3 prod" id={product.id}>
<h2>{product.title}</h2>
<p>{product.description}</p>
 <img src={product.image} className="card-img-top" alt="..." />

</div>
</div>
   

))}

</div>

      


  </div>

  {modal ? <div> <Modal modal={modal} setmodal={setmodal} itemshow={itemshow}/> </div> : ""}


</main>

</>

    );


}


export default Beauty;