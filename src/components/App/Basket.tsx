import { useContext, useState } from "react";
import { UserContext } from "./ContextProvider";
import { useNavigate  } from 'react-router-dom';

function Basket(){

    const {orders, setorders} = useContext(UserContext);

    const {username, setusername} = useContext(UserContext);

    const {fname, setfname} = useContext(UserContext);

    const {lname, setlname} = useContext(UserContext);

    const {email, setemail} = useContext(UserContext);

    const {adress, setadress} = useContext(UserContext);

    const usermail = JSON.parse(localStorage.getItem("user"));

    // console.log(usermail.name)

    const navigate = useNavigate();

    // console.log(orders);

    const redirecthome = () => {

        navigate('/');

    };

    const redirectbill = () => {

      if((orders.length>0)&&(usermail||email)){


            navigate('/bill');


        } else {alert('Please check your basket or your email')};


    };


    const changefname = (e) => {

        e.preventDefault();

        setfname( e.target.value )



    };

    const changelname = (e) => {

        e.preventDefault();

        // setuser({ lastname: e.target.value, ...user })

        setlname(e.target.value)

        // console.log(user);

    };

    const changeuname = (e) => {

        e.preventDefault();

        // setuser({ username: e.target.value, ...user })

        setusername( e.target.value)

        // console.log(user);

    };

    const changemailname = (e) => {

        e.preventDefault();

        // setuser({ email: e.target.value, ...user })

        setemail(e.target.value)

        // console.log(user);
        
    };

    const changeadress = (e) => {

        e.preventDefault();

        // setuser({ adress: e.target.value, ...user })

        setadress(e.target.value)

        // console.log(user);

    };



    return(

        <>

    
      <div className="row g-5" style={{minWidth:'50vw}', marginLeft:'5vw', marginTop:'2vh', marginRight:'5vw'}}>
      <div className="col-md-7 col-lg-8 order-md-last" style={{border:'solid', borderRadius:'1em', padding:'5em', backgroundColor:'rgba(0, 0, 0, 0.449)'}}>
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Your cart</span>
          <span className="badge bg-primary rounded-pill">{orders.length}</span>
        </h4>
        <ul className="list-group mb-3">


        {orders.map(order => (

           
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">{order.product.title}</h6>
              <small className="text-body-secondary">{order.product.description}</small>
            </div>
            <span className="text-body-secondary">{order.id}</span>
            <span className="text-body-secondary">{order.quantity} UNIT(S)</span>
            <span className="text-body-secondary">{order.product.price} Euros</span>
            <span className="text-body-secondary">{order.product.price*order.quantity} Euros</span>
            <button className="btn btn-danger" onClick={() => setorders(orders.filter(o => o.id !== order.id))}>Cancel</button>
          </li>

        ))}
      

          <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
            <div className="text-success">
              <h6 className="my-0">Promo code</h6>
              <small>EXAMPLECODE</small>
            </div>
            <span className="text-success">−$5</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Total (Euros)</span>
            <strong>$
                
            {orders.reduce((acc, order) => acc + order.product.price * order.quantity, 0) - 5}

                </strong>
          </li>
        </ul>

        <form className="card p-2">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Promo code"/>
            <button type="submit" className="btn btn-secondary">Redeem</button>
          </div>
        </form>

            <button onClick={redirecthome} style={{marginLeft:'10vw', marginTop:'5vh'}} >Continue Shopping</button>     
            
            <button onClick={redirectbill} style={{marginLeft:'10vw', marginTop:'5vh'}} >Proceed Paiement</button>

      </div>


      <div className="col-md-5 col-lg-4" style={{border:'solid', borderRadius:'1em', padding:'5em'}}>
        <h4 className="mb-3">Billing address</h4>
        <form className="needs-validation" >
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label" >First name</label>
              <input type="text" className="form-control" id="firstName" placeholder="" value={fname} onChange={changefname}/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label" >Last name</label>
              <input type="text" className="form-control" id="lastName" placeholder="" value={lname} onChange={changelname}/>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="username" className="form-label" >Username</label>
              <div className="input-group has-validation">
                <span className="input-group-text">@</span>
                <input type="text" className="form-control" id="username" placeholder="Username" value={username} onChange={changeuname}/>
              <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>


          {!usermail?.name && (
            <div className="col-12">
              <label htmlFor="email" className="form-label">Email <span className="text-body-secondary"></span></label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" value={email} onChange={changemailname}/>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>)
            }

            
          {usermail?.name && (
            <div className="col-12">
              <label htmlFor="email" className="form-label">Email <span className="text-body-secondary"></span></label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com" value={usermail.name} disabled />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>)
            }

            <div className="col-12">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" placeholder="1234 Main St" value={adress} onChange={changeadress}/>
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="address2" className="form-label">Address 2 <span className="text-body-secondary">(Optional)</span></label>
              <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"/>
            </div>

            <div className="col-md-5">
              <label htmlFor="country" className="form-label">Country</label>
              <select className="form-select" id="country" >
                <option value="">Choose...</option>
                <option>United States</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
            </div>

            <div className="col-md-4">
              <label htmlFor="state" className="form-label">State</label>
              <select className="form-select" id="state" >
                <option value="">Choose...</option>
                <option>California</option>
              </select>
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>

            <div className="col-md-3">
              <label htmlFor="zip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="zip" placeholder="" />
              <div className="invalid-feedback">
                Zip code required.
              </div>
            </div>
          </div>

          <hr className="my-4"/>

          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="same-address"/>
            <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
          </div>

          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="save-info"/>
            <label className="form-check-label" htmlFor="save-info">Save this information for next time</label>
          </div>

          <hr className="my-4"/>

          <h4 className="mb-3">Payment</h4>

          <div className="my-3">
            <div className="form-check">
              <input id="credit" name="paymentMethod" type="radio" className="form-check-input" />
              <label className="form-check-label" htmlFor="credit">Credit card</label>
            </div>
            <div className="form-check">
              <input id="debit" name="paymentMethod" type="radio" className="form-check-input" />
              <label className="form-check-label" htmlFor="debit">Debit card</label>
            </div>
            <div className="form-check">
              <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" />
              <label className="form-check-label" htmlFor="paypal">PayPal</label>
            </div>
          </div>

          <div className="row gy-3">
            <div className="col-md-6">
              <label htmlFor="cc-name" className="form-label">Name on card</label>
              <input type="text" className="form-control" id="cc-name" placeholder="" />
              <small className="text-body-secondary">Full name as displayed on card</small>
              <div className="invalid-feedback">
                Name on card is required
              </div>
            </div>

            <div className="col-md-6">
              <label htmlFor="cc-number" className="form-label">Credit card number</label>
              <input type="text" className="form-control" id="cc-number" placeholder="" />
              <div className="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div className="col-md-3">
              <label htmlFor="cc-expiration" className="form-label">Expiration</label>
              <input type="text" className="form-control" id="cc-expiration" placeholder="" />
              <div className="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div className="col-md-3">
              <label htmlFor="cc-cvv" className="form-label">CVV</label>
              <input type="text" className="form-control" id="cc-cvv" placeholder="" />
              <div className="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>

          <hr className="my-4"/>

          </form>
    </div>

   
  </div>


  </>


  


    )

}

export default Basket;
