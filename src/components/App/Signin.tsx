import { useContext, useEffect, useState } from "react";
import { UserContext } from "./ContextProvider";
import { useNavigate } from "react-router-dom";


function Signin() {

    const {loguser, setloguser} = useContext(UserContext);

    const {logpass, setlogpass} = useContext(UserContext);

    const navigate = useNavigate();

    let userslist = JSON.parse(localStorage.getItem("users"));

    let keyslist = JSON.parse(localStorage.getItem("keys"));


const submit = (e) =>{

  let control = userslist?.find(userfromlist => userfromlist.name==loguser);

  console.log(control);

if ((loguser != '')&&(logpass != '')&&(control == undefined)){

    let user = {

        name: loguser,

        password: logpass,

    };

    e.preventDefault();

    let key = user.name+user.password;

    console.log(userslist)
    console.log(keyslist);

    let newkeyslist = [];
    let newlocalusers = [];

    if (keyslist) {  newkeyslist = [key, ...keyslist];} else {  newkeyslist = [key];}

    console.log(newkeyslist);

    if (userslist) { newlocalusers = [user, ...userslist]} else { newlocalusers = [user]}

    console.log(newlocalusers);

    // localStorage.removeItem("keys");
    // localStorage.removeItem("users");

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("keys", JSON.stringify(newkeyslist));
    localStorage.setItem("users", JSON.stringify(newlocalusers));

     let keylist = JSON.parse(localStorage.getItem("keys"));

    console.log(userslist)
    console.log(keyslist);
    console.log(keylist);


    navigate('/');

  } else {alert("Please fill all the fields in the correct format or change your mail already in use");}

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

    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

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

    <button className="btn btn-primary w-100 py-2" type="submit" >Sign in</button>
    <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
  </form>
</main>



)



}

export default Signin;
