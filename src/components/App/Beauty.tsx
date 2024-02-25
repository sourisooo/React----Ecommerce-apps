
import { useNavigate  } from 'react-router-dom';
import './Beauty.scss';


function Beauty(){

    const navigate = useNavigate();

    const redirecthome = () => {

        navigate('/');

    };


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
          <li className="nav-item"><a className="nav-link" href="#">Tour</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Product</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Features</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Enterprise</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Support</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Pricing</a></li>
          <li className="nav-item"><a className="nav-link" href="#">
            <svg className="bi" width="24" height="24"></svg>
          </a></li>
        </ul>
      </div>
    </div>
  </div>
</nav>

<main>
  <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
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
    </div>
    <div className="product-device shadow-sm d-none d-md-block"></div>
    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>

  <div className="spinner" onClick={redirecthome}/>

 
</main>

</>

    );


}


export default Beauty;