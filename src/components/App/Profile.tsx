import { useContext } from "react";
import { UserContext } from "./ContextProvider";
import { useNavigate } from "react-router-dom";


function Profile() {

    const {username, setusername} = useContext(UserContext);

    const {fname, setfname} = useContext(UserContext);

    const {lname, setlname} = useContext(UserContext);

    const {adress, setadress} = useContext(UserContext);

    const navigate = useNavigate();


    const submit = (e) => {

        e.preventDefault();

        console.log(e.target.parentElement[0].value);

        if (e.target.parentElement[0].value !='') {setfname(e.target.parentElement[0].value)};

        if (e.target.parentElement[1].value !='') {setlname(e.target.parentElement[1].value)};

        if (e.target.parentElement[2].value !='') {setusername(e.target.parentElement[2].value)};

        if (e.target.parentElement[3].value !='') {setadress(e.target.parentElement[3].value)};

        navigate('/');

    };

    const exit = () => {


        navigate('/');

    };



    return (
        <div className="col-md-5 col-lg-4" style={{marginLeft:"35vw", marginTop:'20vh', border:'solid', borderRadius:'1em', padding:'5em'}}>
        <h4 className="mb-3">Billing address</h4>
        <form className="needs-validation" onSubmit={submit}>

          <div className="row g-3">

            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label" >First name</label>
              <input type="text" className="form-control" id="firstName" placeholder={fname} />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label" >Last name</label>
              <input type="text" className="form-control" id="lastName" placeholder={lname} />
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>

            <div className="col-12">
              <label htmlFor="username" className="form-label" >Username</label>
              <div className="input-group has-validation">
                <span className="input-group-text">@</span>
                <input type="text" className="form-control" id="username" placeholder={username} />
              <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>



            <div className="col-12">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" placeholder={adress} />
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>

              </div>
            </div>

            <button type='submit' onClick={submit} style={{marginTop: '5vh', marginRight:'5vw', marginLeft:'5vw'}}>Submit</button>
            <button type='button' onClick={exit} style={{marginTop: '5vh'}}>Exit without saving</button>
            </form>

    

            </div>


    )
}


export default Profile;
