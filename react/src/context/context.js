
import { useState } from "react";
import { createContext } from "react";

const initialState ={
    name: '',
    age:0
}

const UserContext = createContext(initialState)

function UserContextProvider({children}){

    const [user,setUser]=useState(initialState)

    return(
        <UserContext value={{user,setUser}}>
            {children}
        </UserContext>
    )
}