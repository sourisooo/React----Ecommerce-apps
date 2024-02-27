import { useContext, useState } from "react";
import { UserContext } from "./ContextProvider";
import { useNavigate } from "react-router-dom";


function Login() {

    const [loguser, setloguser] = useState('');

    const [logpass, setlogpass] = useState('');


    const navigate = useNavigate();

    let userslist = JSON.parse(localStorage.getItem("users"));

    let keyslist = JSON.parse(localStorage.getItem("keys"));



const submit = (e) =>{

    let logintry = {

        name: loguser,

        password: logpass,

    };

    e.preventDefault();

    // console.log(keyslist);

    let key = logintry.name+logintry.password;

    let result = keyslist?.find(keyfromlist => keyfromlist==key);

    console.log(result, result==undefined);


    if(result != undefined){

    localStorage.setItem("user", JSON.stringify(logintry));

    navigate('/');} else {

        alert("Wrong Credentials");

    };

}


const handleemail = (e) => {

    e.preventDefault();

    setloguser(e.target.value);



}

const handlepassword = (e) => {

    e.preventDefault();

    setlogpass(e.target.value);


}


return(


    
<main className="form-signin w-100" style={{maxWidth:'20vw', marginTop:'20vh', marginLeft:'40vw', border:'solid', borderRadius:'1em', padding:'5em'}}>
  <form onSubmit={submit}>

    <h1 className="h3 mb-3 fw-normal">Please Log in</h1>

    <div className="form-floating">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleemail}/>
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={handlepassword}/>
      <label htmlFor="floatingPassword">Password</label>
    </div>

     <div className="form-check text-start my-3">
      <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
      <label className="form-check-label" htmlFor="flexCheckDefault">
        Remember me
      </label>
    </div>
    <button className="btn btn-primary w-100 py-2" type="submit">Log in</button>
    <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
  </form>
</main>



)



}

export default Login;
