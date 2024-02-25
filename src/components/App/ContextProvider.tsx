import { createContext, useEffect } from "react";
import {useContext, useState} from "react";


export const UserContext= createContext({});

export function UserContextProvider({children}){


    const [orders, setorders] = useState<any>([]);

    const [username, setusername] = useState('');

    const [fname, setfname] = useState('');

    const [lname, setlname] = useState('');

    const [email, setemail] = useState('');

    const [adress, setadress] = useState('');


return (


<UserContext.Provider value={{orders, setorders, username, setusername, fname, setfname, lname, setlname, email, setemail, adress, setadress}}>

{children}

</UserContext.Provider>


);



}